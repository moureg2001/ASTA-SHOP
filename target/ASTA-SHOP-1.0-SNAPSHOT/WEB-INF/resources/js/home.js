/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function handleLoginRequest(xhr, status, args) {
    if (args.validationFailed || !args.loggedIn) {
        PF('dlglogin').jq.effect("shake", {times: 5}, 100);
    } else {
        PF('dlglogin').hide();
        $('#loginLink').fadeOut();
    }
}
function showhidecart(value) {
    if (value == true) {
        PF('layoutWdgt').show('east');
    } else {
        PF('layoutWdgt').hide('east');
    }
}
