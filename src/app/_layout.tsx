import { Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";
import AuthProvider from "../auth-providers";

export default function RootLayout(){

    return (
      <ToastProvider>
        <AuthProvider>
            <Stack>
                <Stack.Screen 
                    name='(shop)' 
                    options={{headerShown: false, title: "Shop" }} 
                />
                <Stack.Screen 
                    name='categories' 
                    options={{headerShown: false, title: "Catagories" }} 
                />
                <Stack.Screen 
                    name='product' 
                    options={{headerShown: false, title: "Product" }} 
                />
                <Stack.Screen 
                    name='cart' 
                    options={{presentation: 'modal', title: "Shopping Cart" }} 
                />
                <Stack.Screen 
                    name='auth' 
                    options={{headerShown: false}} 
                />
            </Stack>
        </AuthProvider>
    </ToastProvider>
    );
}