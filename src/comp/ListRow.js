import React  from 'react';

//=== DOC COOL https://stackblitz.com/edit/react-dpfmdi?file=src%2Fstyle.css
import './ListRow.css';

const getItemStyle = (isDragging, draggableStyle, style) => {
    console.log("=== style2",style?.row_container_when_drug?.backgroundColor)
    // background: isDragging ? style2.row_container_when_drug.backgroundColor : "grey",
    return (

        {
            // some basic styles to make the items look a bit nicer
            userSelect: "none",
            // padding: grid * 2,
            // margin: `0 0 ${grid}px 0`,


            // change background colour if dragging

            background: isDragging ? "lightgreen" : "grey",
            // background: isDragging ? "lightgreen" : "grey",
            border: isDragging ? "3px solid orange" : "none",
            pointerEvents: "auto",
            cursor: isDragging ? "all-scroll" : "pointer",
            // styles we need to apply on draggables
            ...draggableStyle
        });
}
function getStyle(provided, style ) {

    // console.log('=== snapshot.isDragging 333 ',snapshot.isDragging)


    if (!style) {
        return provided.draggableProps.style;
    }

    // console.log('=== style 222',style)
    // console.log('=== style 222',style?.when_drug?.background)

    return {
        ...provided.draggableProps.style,
        ...style,
    };
}


function ListRow  (props) {

    const {
        row_data,
        isDragging,
        // isGroupedOver,
        provided,
        style,
        // isClone,
        index,
    } = props;

    // console.log("=== row_data",row_data)
    //=== DOC !!! IF( isDragging ) style == UNDEF !!!
    console.log("=== style",style)
    console.log("=== isDragging",isDragging)

    return(


        <div className="comp"
            // href={row_data.author.url}
            //=== !!! not delete isDragging={isDragging}
            // isGroupedOver={isGroupedOver}
            // isClone={isClone}
            // colors={row_data.author.colors}
             ref={provided.innerRef}
             {...provided.draggableProps}
             {...provided.dragHandleProps}
            // style={(isDragging)?getStyle( provided, style.when_drug ):getStyle( provided, style )}

             style={getItemStyle(
                 isDragging,
                 provided.draggableProps.style,
                 style
             )}

            // style={getStyle( provided, style )}
             data-is-dragging={isDragging}
             data-color1={'yellow'}
            // data-testid={row_data.id}
             data-index={index}
            // aria-label={`${row_data.author.name} row_data ${row_data.content}`}
        >

            {/*react-beautiful-dnd inline sy;e on drag*/}
            {(!row_data?.name)?'':
                <div>
                    <div>
                        <h5>{`${row_data.name}-${row_data.id}`}</h5>

                    </div>
                    <div

                        // style={
                        //     {   ...provided.draggableProps.style,
                        //         ...{position:'fixed', backgroundColor:isDragging?'yellow':''}
                        //     }}
                    >
                        <p>{row_data.body}</p>
                    </div>
                </div>
            }

        </div>


    )

}


export default ListRow
