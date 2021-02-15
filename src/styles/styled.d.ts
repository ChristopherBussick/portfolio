// @Chrizzy
// Declarations file, see: https://styled-components.com/docs/api#create-a-declarations-file
// -> "DefaultTheme is being used as an interface of props.theme out of the box. By default the interface DefaultTheme is empty so that's why we need to extend it."

// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    // Add more properties here like this:
    // borderRadius: string;

    colors: {
      main: string;
      secondary: string;
      gray: string;
    };
  }
}
