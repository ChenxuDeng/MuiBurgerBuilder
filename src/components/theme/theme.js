import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const brown='#8B4513'
const lightBrown='#D2691E'
export const theme=createMuiTheme({
    palette:{
        common:{
            brown:brown,
            lightBrown:lightBrown
        },
        primary:{
            main:brown
        },
        secondary:{
            main:lightBrown
        }
    }
})