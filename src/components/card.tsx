type CardProps = {
    mealImg : string,
	mealName : string
}


const Card = (props : CardProps) => {

		
     return <article className="border rounded p-1 hover:shadow hover:border-0 transition-shadow ease-in-out duration-150">
            <img src={props.mealImg} alt={props.mealName} 
			className="w-full object-cover rounded lozad" />
            <h3 className="text-gray-700 text-center text-lg px-3 pt-3 pb-2 truncate">{props.mealName}</h3>
          </article>;
	
	
}

export default Card;
