//importing required files
import React from "react";
import { useEffect, useState } from "react";
import SingleContent from "../../common/SingleContent/SingleContent";
import CustomPagination from "../../common/Pagination/CustomPagination";
import "./Trending.css";

const Trending = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const axios = require('axios');

    //fetching api key to recevie the trending movie data 
    const fetchTrending = async () => {
      try{
      const url = `
      https://api.themoviedb.org/3/trending/all/day?api_key=594d4a2e07c4240e4c3b1540eb841369&page=${page}` ;
        const { data } = await axios.get(url);
        setContent(data.results);
      
      }
      catch (err){
        console.error(err);
      }
      
    };
        useEffect(() => {
        fetchTrending();
        }, [page]);

        //showing tyhe movie in a card form
        return(
        <div>
            <span className="pageTitle" > Trending</span>
            <div className="trending">
                {content && content.map((c) =>(
              <SingleContent key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            /> 
          ))}
            </div>
            <CustomPagination setPage={setPage}></CustomPagination>
        </div>
        );
        };
        export default Trending;