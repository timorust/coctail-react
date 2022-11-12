import React from 'react'

const Drink = ({ drink }) => {
	return (
		<div className='list-drink'>
			{drink.strDrink}
			<div>
				<img
					style={{ height: '50px', width: '50px' }}
					src={drink.strDrinkThumb}
					alt={drink.strDrink}
				/>
			</div>
		</div>
	)
}

export default Drink
