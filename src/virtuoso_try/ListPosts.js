

import ListBasic from "./ListBasic";

// interface ContainerProps {
//   id?: string;
//   name?: string;
//   data_array: [];
//   card_render?: any;
// }


const ListPosts = (props) => {
    return (
        <div>

            {/*{style: {backgroundColor: 'orange'}*/}
            <ListBasic {...{...props,
                card_render:(element)=>{
                           return (
                               <div>
                                   {element.content_post_description}
                                   {element.content_post_owner_guid}
                               </div>
                           )
                       },
                on_Add:(item_data)=>{
                    console.log("=== on_Add Posts ", item_data)},
                style:{
                    backgroundColor: 'blue',
                    width:'300px', //settings_width_list_posts
                    // width:'100%',    // work as dynamic
                    height:'150px',
                    // height:'100%',   // work as dynamic

                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center',

                }}} />

        </div>
    );
};

export default ListPosts;

