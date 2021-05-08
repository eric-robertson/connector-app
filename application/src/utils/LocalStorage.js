import AsyncStorage from '@react-native-async-storage/async-storage'

const userToken = '@randomToken'
const themeData = '@theme'

// User token data

export const getUserId = async () => {
    return await AsyncStorage.getItem( userToken )
}
export const setUserId = async ( id ) => {
    return await AsyncStorage.setItem( userToken, id)
}
export const userIdExists = async () => {
    try {
        const id = await AsyncStorage.getItem(userToken);
        return !! id ;
     } catch (error) {
        return false;
     }
}

// App theme data

export const getThemeData = async () => {
    return await AsyncStorage.getItem(themeData)
}
export const setThemeData = async ( theme ) => {
    return await AsyncStorage.setItem( themeData, theme)
}

// Clear all data

export const clearData = async () => {
    await AsyncStorage.clear()
}