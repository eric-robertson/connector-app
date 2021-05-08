import * as Local from './LocalStorage'

const defaultTheme = {
    background : '#EDEDED',
    paper : '#ECECEC',
    primary : '#DB6660',
    primaryDark : '#B93C47',
    secondary : '#0E1C50',
    text : '#303030'
}
const themes = {
    default : { ... defaultTheme }
}
let activeTheme = 'default'

// Set themes dynamicly

export const setTheme = ( theme ) => {
    activeTheme = theme
}

// Access colors

export const background = () => {
    return themes[activeTheme].background
}
export const paper = () => {
    return themes[activeTheme].paper
}
export const primary = () => {
    return themes[activeTheme].primary
}
export const primaryDark = () => {
    return themes[activeTheme].primaryDark
}
export const secondary = () => {
    return themes[activeTheme].secondary
}
export const text = () => {
    return themes[activeTheme].text
}

// Initialize theme

export const initializeTheme = async () => {
    const theme = await Local.getThemeData()
    if ( ! theme ) 
        await Local.setThemeData('default')
    else
        await setTheme( theme )
}