import React,{useState} from 'react';
import ShoppingItem from '../models/ShoppingItem';
import {useDispatch,useSelector} from 'react-redux';
import {add} from '../actions/shoppingActions';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {AppState} from '../types/states';

interface State {
	type:string;
	count:number;
	price:number;
}

const ShoppingForm:React.FC<{}> = (props) => {
	
	const [state,setState] = useState<State>({
		type:"",
		count:0,
		price:0
	})
	
	const tokenSelector = (state:AppState) => state.login.token;
	const token = useSelector(tokenSelector);
	
	const dispatch:ThunkDispatch<any,any,AnyAction> = useDispatch();

	const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	
	const onSubmit = (event:React.SyntheticEvent) => {
		event.preventDefault();
		let item = new ShoppingItem(state.type,state.count,state.price,"");
		dispatch(add(token,item));
		setState({
			type:"",
			count:0,
			price:0
		})
	}
	return(
		<div style={{
			"width":"40%",
			"backgroundColor":"magenta",
			"margin":"auto"
		}}>
			<form className="mb-5" onSubmit={onSubmit}>
				<label className="form-label" htmlFor="type">Type</label>
				<input type="text"
						name="type"
						id="type"
						className="form-control"
						onChange={onChange}
						value={state.type}/>
				<label className="form-label" htmlFor="count">Count</label>
				<input type="number"
						name="count"
						id="count"
						className="form-control"
						onChange={onChange}
						value={state.count}/>						
				<label className="form-label" htmlFor="price">Price</label>
				<input type="number"
						name="price"
						id="price"
						step="0.01"
						className="form-control"
						onChange={onChange}
						value={state.price}/>
				<input type="submit" className="btn btn-primary" value="Add"/>
			</form>
		</div>
	)
}

export default ShoppingForm;