# Module: MMM-HomeSenor
This MagicMirror modules allows you to show any your senor information on you mirror. Currently it only works with a Raspberry Pi.


## Installation

In your terminal, go to your MagicMirror's Module folder:
````
cd ~/MagicMirror/modules
````

Clone this repository:
````
git clone https://github.com/dauden/mmm-homesenor.git
````

inside of mmm-homesenor directory
```
npm install
```

Configure the module in your `config.js` file.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'mmm-homesenor',
		position: 'top_center',	// This can be any of the regions.
		classes: 'small dimmed', // Add your own styling. Optional.
		config: {
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following properties can be configured:


<table width="100%">
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>gpioPin</code></td>
			<td>The number of pin that sensor connected to GPIO.
				<br><b>Default value:</b> <code>'17'</code>
			</td>
		</tr>
		<tr>
			<td><code>updateInterval</code></td>
			<td>How often does the content needs to be fetched? (Milliseconds)
				<br><b>Possible values:</b> <code>1000</code> - <code>86400000</code>
				<br><b>Default value:</b> <code>5000</code> (5 seconds)
			</td>
		</tr>
		<tr>
			<td><code>sensorType</code></td>
			<td>It should work for DHT11, DHT22 and AM2302 sensors.
				<br><b>You should use sensorType value to match the sensor as follows:</b> 
				<br><code>DHT11</code> - <code>11</code>
				<br><code>DHT22 or AM2302</code> - <code>22</code>
				<br><b>Default value:</b> <code>11</code>
			</td>
		</tr>
		<tr>
			<td><code>unit</code></td>
			<td>Temperature unit of measurement
				<br><b>Possible values:</b> <code>c</code> (Celsius), <code>f</code> (fahrenheit), <code>k</code> (Kelvin)
				<br><b>Default value:</b> <code>c</code> (Celsius)
			</td>
		</tr>
		<tr>
			<td><code>valueProperty</code></td>
			<td>The value of property fro senor
				<br><b>Ex:</b> <code>DHT11</code>Senor, <code>{temperature, humditity}</code>
				<br><b>Default value:</b> <code>temperature</code> (Celsius)
			</td>
		</tr>
	</tbody>
</table>