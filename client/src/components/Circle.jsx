import React, { useState, useEffect } from "react";
import { updateState, test } from '../Functions'

export default function Circle(props) {
    return ( 
    	<>
        	<div id="circle" className={updateState()} onClick={()=>updateState()}></div> 
        </>
    );
}