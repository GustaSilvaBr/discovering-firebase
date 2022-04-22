# Start with firebase hosting

To put our projects online we can host by firebase.
Firebase it's a good way to do this.
  
### `firebase init`  Start the firebase on your project

### `firebase emulators:start` Emulates your project in local host

To emulate to more devices, put this following code on firebase.json:
```json
{
	"hosting": {
		/*...*/
	},
	"emulators": {
		"hosting": {
		"port":  5000,
		"host":  "0.0.0.0"
		}
	}
}
```
### `firebase hosting:channel:deploy: CHANNEL_ID`
If you want others to view changes to your web app before going live, you can use preview channels
 >Replace CHANNEL_ID with a string with no spaces (for example, `feature_mission-2-mars`). This ID will be used to construct the preview URL associated with the preview channel.

