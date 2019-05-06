<img alt="Paraboly React Native Card Button" src="https://github.com/Paraboly/react-native-card-button/blob/master/assets/op_logo.png" width="1050"/>

Fully customizable Card Button via Paraboly for React Native.

[![npm version](https://img.shields.io/npm/v/@paraboly/react-native-card-button.svg)](https://www.npmjs.com/package/@paraboly/react-native-card-button)
[![npm](https://img.shields.io/npm/dt/@paraboly/react-native-card-button.svg)](https://www.npmjs.com/package/@paraboly/react-native-card-button)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Card Button" src="https://github.com/Paraboly/react-native-card-button/blob/master/assets/Screenshots/example.png" width="49.7%"/>
</p>


## Installation

Add the dependency:

```ruby
npm i @paraboly/react-native-card-button
```

## Peer Dependencies

##### IMPORTANT! You need install them.

```
"react": ">= 16.x",
"react-native": ">= 0.55.x",
"react-native-vector-icons": ">= 6.x.x",
"react-native-linear-gradient": ">= 0.2.x",
"react-native-material-ripple": ">= 0.8.x",
"react-native-dynamic-vector-icons": ">= x.x.x"
```

## Basic Usage

```ruby
<CardButton text="Trafik Yoğunluğu" />
```


## Advanced Usage

```ruby
<CardButton
	width={75}
	height={75}
	textSize={10}
	key={layer.id}
	text={layer.title}
	iconColor={"white"}
	textColor={"white"}
	gradient={layer.active}
	gradientColor={["#48c6", "#2f3a60"]}
	onPress={_.partial(this.toggle, item).bind(this)}
	iconComponent={
		<View style={sharedStyle.center}>
			<MyIcon
				name={layerConstants.ICON_MAP[layer.type].name || 'map' }
				size={50}
				color={!layer.active ? colors.theme.light.lightenGrey : "white"}/>
		</View>
	}
/>
```

### Configuration - Props


| Property             |    Type     |   Default    | Description                                                                           |
| -------------------- | :---------: | :----------: | ------------------------------------------------------------------------------------- |
| isOpen               |   boolean   |    false     | use this to open modal directly                                                       |
| coverScreen          |   boolean   |    false     | use this to set your modal covers the whole screen                                    |
| refName              |   string    |     null     | set a reference name for the modal, this is for dynamic usage of the modal            |
| backdrop             |   boolean   |    false     | use this to add a backdrop for the modal                                              |
| modalWidth           |   number    |   dynamic    | use this to set custom modal width                                                    |
| modalHeight          |   number    |   dynamic    | use this to set custom modal height                                                   |
| modalBottom          |   number    | height * 0.6 | use this to change where modal will be appear depends on the bottom                   |
| generateButtons      |    array    |     null     | use this to generate buttons as an example (You must create an array with the format) |
| modalDesignComponent |  component  | ModelDesign  | set your own modal design as a component                                              |
| title                |   string    |      ""      | change the title                                                                      |
| context              |   string    |      ""      | change the context                                                                    |
| rightText            |   string    |      ""      | change the title right side                                                           |
| titleFontFamily      | font family |  Helvetica   | use this to set the font family for the modal                                         |
| rightTextFontFamily  | font family |  Helvetica   | use this to set the font family for the modal                                         |
| contextFontFamily    | font family |  Helvetica   | use this to set the font family for the modal                                         |
| contextHeight        |   number    |      55      | use this to set context's height                                                      |
| defaultContext       |   string    |      ""      | use this to set a default context value                                               |
| titleTextStyle       |    style    |    style     | use this to set your own style for title text                                         |
| rightTextStyle       |    style    |    style     | use this to set your own style for right title text                                   |
| contextTextStyle     |    style    |    style     | use this to set your own style for context text                                       |
| backgroundColor      |    color    |   #a092d6    | use this to set background color for the header part of the modal                     |
| customIconComponent  |  component  |     null     | use this to set your own custom icon component for the generated buttons              |
| onOpened             |  function   |     null     | use this to set your own onOpened function                                            |
| onClosed             |  function   |     null     | use this to set your own onClosed function                                            |


## Generated Buttons Usage
Okey, we can use Dynamic Vector Icons component as generated buttons but we must follow this format. "generateButtons" prop accepts an array and it must be like this : (You can check the example)

```ruby
buttons = [
    {
      size: 35,
      name: "cancel",
      icon: "cancel",
      color: "#C60817",
      type: "MaterialIcons",
      onPress: () => {}
    },
    {
      size: 35,
      name: "verify",
      color: "#06CAA6",
      icon: "verified-user",
      type: "MaterialIcons",
      onPress: () => {}
    }
  ];
```

#### Generated Buttons Custom Icon Usage

We can use our own custom icon component as well but still we must follow the above format for the generatedButtons but this time we need to send "customIcon: true" data as well. It let the lib knows that a custom icon will be used and also we need to provide "customIconComponent" to let it knows that which component will be implement. 

CustomIconComponent should be something like the below. It has to be item.icon, item.size and item.color for the usage of generatedButtons.

```ruby
 buttons = [
    {
      size: 28,
      name: "map",
      icon: "map",
      color: "#C60817",
      customIcon: true, // Magic is here, DO NOT FORGET this line!
      onPress: () => {}
    },
    {
      size: 28,
      color: "#06CAA6",
      customIcon: true, // Magic is here, DO NOT FORGET this line!
      icon: "announcement",
      name: "announcement",
      onPress: () => {}
    }
  ];
```

```ruby
<GenericModal
  isOpen={true}
  backdrop
  title="Title"
  ref="testModal"
  refName="testModal"
  context="Test Modal"
  generateButtons={this.getButtons()}
  contextTextStyle={styles.contextTextStyle}
  backgroundColor={colors.theme.light.default}
  customIconComponent={
      <MyIcon
          name={item.icon}
          size={item.size}
          color={item.color || colors.theme.light.primaryDark}
       />
    }
/>
```

## Author

FreakyCoder, kuray.ogun@paraboly.com || kurayogun@gmail.com

## License

React Native Card Button Library is available under the MIT license. See the LICENSE file for more info.
