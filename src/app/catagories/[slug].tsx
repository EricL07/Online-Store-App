import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Redirect, useLocalSearchParams, Stack } from "expo-router";
import { CATEGORIES } from "../../../assets/catagories";
import { PRODUCTS } from "../../../assets/products"; // <-- Add this import
import ProductListItem from "../../components/product-list-item";

const Catagory = () => {
    const { slug } = useLocalSearchParams<{ slug: string }>();
    
    const catagory = CATEGORIES.find(category => category.slug === slug);

    if (!catagory) return <Redirect href="/404" />
    
    const products = PRODUCTS.filter(product => product.category.slug === slug);
     
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: catagory.name }} />
            <Image source={{ uri: catagory.imageUrl }} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{catagory.name}</Text>
            <FlatList
                data={products}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <ProductListItem product={item} />}
                numColumns={2}
                contentContainerStyle={styles.productsList}
                columnWrapperStyle={styles.productRow}
            />
        </View>
    )

}

export default Catagory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    categoryImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 8,
        marginBottom: 16,
    },
    categoryName: {
        fontSize: 24,   
        fontWeight: 'bold',
        marginBottom: 8,
    },
    productsList: {
        flexGrow: 1,
    },
    productRow: {
        justifyContent: 'space-between',
    },
    productContainer: {
        flex: 1,
        margin: 8,
    },
    processImage: {
        width: '100%',      
        height: 150,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    productPrice: {
        fontSize: 14,
        color: '#888',
        marginTop: 4,
    },
});