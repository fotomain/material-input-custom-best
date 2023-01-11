import React  from 'react';

function getStyle(provided, style ) {
    if (!style) {
        return provided.draggableProps.style;
    }

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

    console.log("=== row_data",row_data)

    return(


        <div className="comp"
             // href={quote.author.url}
             //=== !!! not delete isDragging={isDragging}
             // isGroupedOver={isGroupedOver}
             // isClone={isClone}
             // colors={quote.author.colors}
             ref={provided.innerRef}
             {...provided.draggableProps}
             {...provided.dragHandleProps}
             style={getStyle(provided, style)}
              data-is-dragging={isDragging}
             // data-testid={quote.id}
              data-index={index}
             // aria-label={`${quote.author.name} quote ${quote.content}`}
        >

            {(!row_data?.name)?'':
                <div>
                     <h5>{`${row_data.name}-${row_data.id}`}</h5>

                     <p>{row_data.body}</p>
                </div>
            }

        </div>


    )

}

export default ListRow
