import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from "jquery";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

$(function() {

        var $el, leftPos, newWidth,
            $mainNav = $("#example-one");
        
        $mainNav.append("<li id='magic-line'></li>");
        var $magicLine = $("#magic-line");
        
        $magicLine
            .width($(".active").width())
            .css("left", $(".active").position().left)
            .data("origLeft", $magicLine.position().left)
            .data("origWidth", $magicLine.width());
            
        $("#example-one li").hover(function() {
            $el = $(this);
            leftPos = $el.position().left;
            newWidth = $el.width();
            $magicLine.stop().animate({
                left: leftPos,
                width: newWidth
            });
        }, function() {
            $magicLine.stop().animate({
                left: $magicLine.data("origLeft"),
                width: $magicLine.data("origWidth")
            });    
        });

        
        $("#example-one li").click(function() {
            $el = $(this);
            leftPos = $el.position().left;
            newWidth = $el.width();
            $magicLine
                .data("origLeft", leftPos)
                .data("origWidth", newWidth);
        });

        
        
    });
