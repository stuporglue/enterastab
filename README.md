# EnterAsTab #
Treat enter in forms as tab, unless the element is a submit element. 

Copyright 2013 Michael Moore <stuporglue@gmail.com>

License: GPL.v2

## ABOUT ##

EnterAsTab changes the ENTER/RETURN functionality in forms to be more friendly for mobile devices. 

New behavior is: 

1. If the current input is of type submit, the form is submitted.
2. If not, the focus is moved to the next input element. 
3. If the newly-found input is a submit, the form is submitted.

Without this code if the user enters text and then hits enter the form gets
submitted.

This code is somewhat dumb, it doesn't take into account if the element is actually
visible or not, though we do check for attribute type='hidden'

## USAGE ##

Set the onkeypress event to the enterAsTab function. 

You can run applyEnterAsTab() to apply it to all input elements or

you can use jQuery/zepto/whatever to apply it to specific elements

## EXAMPLE ##

    applyEnterAsTab(); // all input elements are now set to use EnterAsTab

    $('input.enterastab').on('keypress',enterAsTab); // Only the inputs with enterastab class

    $("#oneform input").on('keypress',enterAsTab);   // All inputs within a specific form
