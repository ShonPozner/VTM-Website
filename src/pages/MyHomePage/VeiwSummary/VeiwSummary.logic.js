import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import {fetchNotes} from './ViewSummary.Api'; 



const VeiwSummaryLogic = (setLoading , mySummaries)  => {
    const [notes, setNotes] = useState([]);
    const [allTagsNotes, setAllTagsNotes] = useState([]);
    const [filterTagsNotes, setFilterTagsNotes] = useState([]);

    const [viewSummary, setViewSummary] = useState();

    const [mode, setMode] = useState('view');
    const params = useParams();

    const toggleMode = () =>  {
        setMode( mode==='view' ? 'edit' : 'view');
    };



    useEffect(() => {
        const sid = parseInt(params.sid);
        setViewSummary(getSummaryById(sid));
        fetchNotes(sid, setNotes, setLoading);
    }, []);

    useEffect(() => {
        const allNotes = getAllTags(notes)
        setAllTagsNotes(allNotes);
        setFilterTagsNotes(allNotes);
    }, [notes])

    const getAllTags = (notes) => {
        const allTags = new Set();
        notes.forEach((note) => {
            allTags.add(note.tag)
        });
        return Array.from(allTags)
    }


    const toggleFilterNote = (tag) => {
        if (filterTagsNotes.includes(tag)) {
            setFilterTagsNotes(filterTagsNotes.filter(item => item !== tag));
        } else {
            setFilterTagsNotes(prev => [...prev, tag]);            
        }
    }


    // get the relevant summary from all summaries (by sid)
    const getSummaryById = sid => {
        return mySummaries.find(summary => summary.sid === sid);
    }
   

    return {
        notes, viewSummary, allTagsNotes, 
        filterTagsNotes, toggleFilterNote,
        toggleMode , mode, setNotes
    }
} 


export default VeiwSummaryLogic;





