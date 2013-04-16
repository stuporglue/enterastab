/*
 * EnterAsTab
 *
 * Copyright 2013 Michael Moore <stuporglue@gmail.com>
 *
 * License: Use it however you want, for whatever you want
 *
 ***************** ABOUT *******************
 *
 * EnterAsTab changes the ENTER/RETURN functionality in forms to be more friendly for mobile devices. 
 * 
 * New behavior is: 
 *
 * If the current input is of type submit, the form is submitted.
 * If not, the focus is moved to the next input element. If the next input is 
 * a submit input, the form is submitted.
 *
 * Without this code if the user enters text and then hits enter the form gets
 * submitted.
 *
 * This code is somewhat dumb, it doesn't take into account if the element is actually
 * visible or not, though we do check for attribute type='hidden'
 *
 ***************** USAGE *******************
 * Set the onkeypress event to the enterAsTab function. 
 * You can run applyEnterAsTab() to apply it to all input elements or
 * you can use jQuery/zepto/whatever to apply it to specific elements
 *
 ***************** EXAMPLE *******************
 * applyEnterAsTab(); // all input elements are now set to use EnterAsTab
 *
 * $('input.enterastab').on('keypress',enterAsTab); // Only the inputs with enterastab class
 * $("#oneform input").on('keypress',enterAsTab);   // All inputs within a specific form
 *
 ***************** lICENSE ******************
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2, as 
 * published by the Free Software Foundation.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */

function enterAsTab(e){
	if ( e.which == 13 ) {
        // We're on a submit, so click it
        if(this.getAttribute('type').toLowerCase() == 'submit'){
            return; // let default bubble up
        }

        var n,t;
        n = this;
        do {
            n = n.nextSibling;
            if(n === null){ return; }// no next sibling. Do default behavior
            if(n.tagName != "INPUT"){ continue; }
            
            // don't deal with things without a type (such as labels or text nodes) or which are hidden
            t = n.getAttribute('type');
            if(t === null || t.toLowerCase() == 'hidden'){
                continue; 
            }

            if(t.toLowerCase() == 'submit'){
                return; // bubble up to default
            }else{
                n.focus(); // Found one. Focus,prevent default and done
                e.preventDefault();
                return;
            }
        } while(n !== null);
	}
}

function applyEnterAsTab(){
    var inputs = document.getElementsByTagName('input');
    for(var i = 0;i<inputs.length;i++){
        inputs[i].onkeypress=enterAsTab;
    }
}
