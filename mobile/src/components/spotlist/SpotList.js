import React, { useEffect, useState } from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import api from '../../services/api';
import styles from './styles'

function SpotList({ tech, navigation }) {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const res = await api.get('/spots', {
                params: { tech }
            })

            setSpots(res.data);
        }

        loadSpots();
    }, []);

    function handleNavigate(id) {
        navigation.navigate('Book', { id })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Empresas que usam <Text style={styles.bold}>{tech}</Text></Text>

            <FlatList
                style={styles.list}
                data={spots}
                keyExtractor={spot => spot._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.listitem}>
                        <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }} />
                        <Text style={styles.company}>{item.company}</Text>
                        <Text style={styles.price}>{item.price ? `R$${item.price}/dia` : 'GRATUITO'}</Text>
                        <TouchableOpacity onPress={() => handleNavigate(item._id)} style={styles.button}>
                            <Text style={styles.buttonText}>Solicitar reserva</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

export default withNavigation(SpotList);