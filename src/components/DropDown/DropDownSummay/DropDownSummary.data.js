import { useContext } from 'react';
import { SummariesContext } from '../../../utils/context/SummariesContext';
import { useHistory, useParams } from "react-router-dom";
import { faShare, faTrash, faEdit, faEye, faLock } from '@fortawesome/free-solid-svg-icons'; // Icons

const DropDownSummaryData = () => {
	const { deleteSummary, ShareSummary } = useContext(SummariesContext);
	let history = useHistory(); //FIXME? const
	let { page } = useParams(); //FIXME? const

	const viewSummary = (sid, title) => {
		history.push('/myHome/' + page + '/' + title + '/' + sid, sid);
	}

	//TODO create styled one and move to util *2
	const confirmDelete = (sid) => {
		var ans = window.confirm("Are you sure you want to delete this summary?");
		if (ans === true) {
			deleteSummary(sid);
		}
	}

	return [
		
		{
			title: 'view',
			icon: faEye,
			function: viewSummary
		},
		{
			title: 'edit',
			icon: faEdit,
			function: viewSummary
		},
        {
			title: 'access',
			icon: faLock,
			function: viewSummary
		},
        {
			title: 'Share',
			icon: faShare,
			function: ShareSummary
		},
		{
			title: 'Delete',
			icon: faTrash,
			function: confirmDelete
		}
	];

}

export default DropDownSummaryData;

