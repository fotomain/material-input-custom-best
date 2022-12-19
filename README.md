# Material Input from scratch CSS only Best React App
 
Do it:
### `npm i`
### `npm start`

#Backlog

##placeholder_color
as !important

##BORDER CSS FROM CENTER

### html
<h1 class="fromCenter">Expand from center</h1><br/>
<h1 class="fromRight">Expand from right</h1><br/>
<h1 class="fromLeft">Expand from left</h1>

### css
h1 { color: #666;display:inline-block; margin:0;text-transform:uppercase; }
h1:after {
  display:block;
  content: '';
  border-bottom: solid 3px #019fb6;  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}
h1:hover:after { transform: scaleX(1); }
h1.fromRight:after{ transform-origin:100% 50%; }
h1.fromLeft:after{  transform-origin:  0% 50%; }

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


        // var style_input_focused_label = document.createElement('style');
        // style_input_focused_label.type = 'text/css';
        //
        // style_input_focused_label.innerHTML = '.'+uniq_input1_settings_class_id+':focus + label, .'+uniq_input1_settings_class_id+' + label.show { ' +
        //      ((props.label_text_color)?'color:'+ props.label_text_color:'color: var(--color_main_focused)')+' !important ; ' +
        //         'box-shadow: 0 0 0 2px darkorange '+' !important ; ' +
        //         'border-radius: 5px '+' !important ; ' +
        //      '}';
        //  document.getElementsByTagName('head')[0].appendChild(style_input_focused_label);
        //  document.getElementById(uniq_input1_id).classList.add(uniq_input1_settings_class_id);
        //


            // console.log()
            // var style = document.createElement('style');
            // style.type = 'text/css';

            // style.innerHTML = '.'+uniq_input1_class_right_id+':focus + label, .'+uniq_input1_class_right_id+' + label.show { ' +
            //     ((!props.label_text_color_focused)?
            //              'color: teal !important ;'
            //             :'color: '+props.label_text_color_focused+' !important ;') +
            //     'left: '+'calc(100% - 30px - ' + label_width + ')'+' !important ; ' +
            //     '}';
            // document.getElementsByTagName('head')[0].appendChild(style);
            // document.getElementById(uniq_input1_id).classList.add(uniq_input1_class_right_id);


#ANIMATIONS

{/*DOC*/}
{/*move*/}
{/*https://webplatform.github.io/docs/tutorials/css_transforms!}*/
{/*transforms*/}

    {/*https://webplatform.github.io/docs/tutorials/css_transforms!}*/
        {/*http://jsfiddle.net/vn2Vu/7!}*/
            {/*http://jsfiddle.net/vn2Vu/11!}*/


@keyframes anime_pulse {
from {
transform : scale(0.80);
opacity   : 1;
color:black;
}

    30% {

        transform : rotate(90deg) scale(.60);
        color:blue;
        content: "Text 111";
    }

    30% {

        transform : rotate(90deg) scale(.40);
        color:green;
        content: "Text 222";
    }
    30% {

        transform : rotate(90deg) scale(.40);
        color:red;
        content: "Text 333";
    }
    30% {

        transform : rotate(90deg) scale(.40) ;
        color:darkorange;
        content: "Text 444";
    }



    to {

        transform : rotate(360deg) scale(1);
        opacity   : 1;
        color:green;
    }



}

      // Object.entries(props).map(([key, val])=>{
        //     }))

          // var label_shift =  ' - ' + label_width + ' - 40px '
            // // var t_=''
            //   if(input_focused){
            //       label_shift = ' - ' + label_width + ' - 40px '
            //   }


const setProperty = (a,b) => {
document.documentElement.style.setProperty(a,b)
}
