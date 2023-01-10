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


function QuoteItem  (props) {

    const {
        quote,
        isDragging,
        // isGroupedOver,
        provided,
        style,
        // isClone,
        index,
    } = props;

    console.log("=== quote",quote)

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

            {(!quote?.name)?'':
                <div>
                     <h5>{`${quote.name}-${quote.id}`}</h5>

                     <p>{quote.body}</p>
                </div>
            }

        </div>


    )

}

export default QuoteItem
