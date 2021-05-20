import React, {useContext} from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import {SummariesContext} from '../../../../utils/context/SummariesContext';


import img1 from '../../../../images/illustrations/1MassesWisdom.png'; 
import img2 from '../../../../images/illustrations/Tacking_note1.png'; 
import img3 from '../../../../images/illustrations/Sending emails_Monochromatic.png';
import img4 from '../../../../images/illustrations/SendSummaries.png';




const Contaner = styled.form`
  display: block;
  position: absolute;
  top: 50px;
  z-index: 100;
  right: 99px;
  background: gray;
  height: auto;
  width: auto;
  margin: 10px;
`;

const LableText = styled.label`
  font-size: 18px;
  margin: 10px;
`;

function AddForm({close}) {
  const {addSummary} = useContext(SummariesContext);
 
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
      console.log('form data is -> ',data);
      data["id"] = parseInt(data.id);
      data["tags"] = createTagsArrays(data.tags);
      data["createdTime"] = getNowDate();
      data["editTime"] = getNowDate();
      data["likes"] = parseInt(data.likes);

      addSummary(data);
      close(); 
  }

  const createTagsArrays = (str) => {
    let tags = str.split(" ");
    return tags

  }


  const getNowDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
  } 



  return (
    <Contaner onSubmit={handleSubmit(onSubmit)}>
        <div>
            <LableText>Sid</LableText>
            <input defaultValue={Math.floor(Math.random() * 10000)} placeholder='1' type='number' name='id' {...register("id")} />
        </div>
        <div>
             <LableText>author</LableText>
             <input  defaultValue='author' placeholder='author' type='text' name='autorName'  {...register("autorName")}></input>
         </div>
         <div>
             <LableText>url</LableText>
             <input defaultValue='url' placeholder='url' type='text' name='url' {...register("url")}></input>
         </div>
         <div>
             <LableText>title</LableText>
             <input  defaultValue='Title' placeholder='Title' type='text' name='title' {...register("title")}></input>
         </div>
         <div>
             <LableText>tags</LableText>
             <input  placeholder='tags' type='text' defaultValue='tags' name='tages' {...register("tags")}></input>
         </div>
         <div>
             <LableText>Likes</LableText>
             <input  placeholder='0' type='number' defaultValue={0} name='likes' {...register('likes')}></input>
         </div>

         <div>
            <LableText>imgUrl</LableText>
            <select {...register("imgUrl")}>
              <option value={img1}>MassesWisdom</option>
              <option value={img2}>Tacking_note1</option>
              <option value={img3}>Sending emails</option>
              <option value={img4}>SendSummaries</option>
            </select>
         </div>

         <div>
             <LableText>favorite</LableText>
             <input type='checkbox' defaultValue={0} name='favorite' {...register("favorite")}></input>
         </div>
      
      <input type="submit" />
    </Contaner>
  );
}

export default AddForm;
