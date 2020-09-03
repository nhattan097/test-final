import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import * as action from '../actions/index';
import swal from 'sweetalert';
//
function ItemSon(props) {
	const widget = useSelector(state => state.isWidget);
	const dispatch = useDispatch();
	const handleClick = id => {
		if (id === 2) {
			dispatch(action.checkPostContent())
		}
		else {
			dispatch(action.checkClosePost())
		}
	};

	//Xóa
	const onDelete = id => {
		dispatch(action.deleteWidget(id));
		console.log(id)
		if (id === 1) dispatch(action.closeGrawMenu());
		if (id === 3) dispatch(action.closeNavigation());
		if (id === 2) {
			dispatch(action.closePostContent())
			dispatch(action.checkClosePost())
		}

	};
	//Hiển thị xóa
	const alertDelete = id => {
		swal({
			title: 'Are you sure?',
			icon: 'warning',
			buttons: true,
			dangerMode: true
		}).then(willDelete => {
			if (willDelete) {
				onDelete(id);
				swal('Widget has been deleted!', {
					icon: 'success'
				});
			}
		});
	};
	return widget.map((wid, index) => (
		<div onClick={() => handleClick(wid[0].id)} className="item-son" key={index}>
			<div className="background-item-son">
				<div className="name-item-son">
					<span>{wid[0].name}</span>
					<i
						className="material-icons icon-widget"
						onClick={() => alertDelete(wid[0].id)}>
						delete
          </i>
				</div>
			</div>
		</div>
	));
}
const mapStateToProps = state => {
	return {
		Widget: state.Widget
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setSetting: active => dispatch(action.setSetting(active)),
		setWidget: active => dispatch(action.setWidget(active))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemSon);
