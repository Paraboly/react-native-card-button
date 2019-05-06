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

```js
<CardButton text="Home" />
```

## Solid Background (Non Gradient) Usage
```js
<CardButton gradient={false} backgroundColor="#049134" />
```


## Advanced Usage

```js
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
				size={50}
				name={'map' }
				color={"white"}/>
		</View>
	}
/>
```

### Configuration - Props


| Property                    |    Type     |              Default              | Description                                                                     |
| --------------------------- | :---------: | :-------------------------------: | ------------------------------------------------------------------------------- |
| gradient                    |   boolean   |               true                | if you do not want to use card button with gradient color, simply make it false |
| width                       |   number    |                90                 | change the card button's width                                                  |
| height                      |   number    |                90                 | change the card button's height                                                 |
| start                       |   object    |          { x: 0, y: 1 }           | change the gradient's start way                                                 |
| end                         |   object    |          { x: 0, y: 1 }           | change the gradient's end way                                                   |
| text                        |   string    |               Test                | use this to set card button's below text                                        |
| gradientColors              | color array | ["#f9f7b4", "#f7c77e", "#e8ba6b"] | use this to set your own gradient colors                                        |
| modalBottom                 |   number    |           height * 0.6            | use this to change where modal will be appear depends on the bottom             |
| borderRadius                |   number    |                20                 | change the border radius                                                        |
| iconName                    |   string    |              traffic              | change the icon itself                                                          |
| iconSize                    |   number    |                36                 | change the icon's size                                                          |
| iconType                    |   string    |           MaterialIcons           | change the icon's type                                                          |
| iconColor                   |    color    |             "#cdcfd6"             | change the icon's color                                                         |
| rippleColor                 |    color    |             "#678fee"             | change the ripple color                                                         |
| fontFamily                  | font family |              default              | use this to set your own font family                                            |
| backgroundColor             |    color    |             "#fcfcfc"             | change the background color if you want to use solid color                      |
| rippleContainerBorderRadius |   number    |                20                 | change the ripple's border radius                                               |

## Author

FreakyCoder, kuray.ogun@paraboly.com || kurayogun@gmail.com

## License

React Native Card Button Library is available under the MIT license. See the LICENSE file for more info.
