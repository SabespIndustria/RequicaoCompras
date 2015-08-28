/*
 * Sybase Mobile Workflow version 2.1.3
 * 
 * Custom.js
 * This file will not be regenerated, and it is expected that the user may want to
 * include customized code herein.
 *
 * The template used to create this file was compiled on Thu Sep 20 06:45:26 BRT 2012
 * 
 * Copyright (c) 2010,2011 Sybase Inc. All rights reserved.
 */

//var myGlobalVariable = "";		// example global variable
 
//Use this method to add custom html to the top or bottom of a form
function customBeforeWorkflowLoad() {
	//  Please note some scenarios that should not be handled here:
	//    1)  There is no screen available before workflow load finishes
	//    2)  You cannot called any SharedStorage functions here because the url parameters
	//        have not yet been parsed and workflow setting are not yet initialized.
    return true;
}

function customAfterWorkflowLoad() {
/*
    var screenKey = getCurrentScreen();
    var form = document.forms[screenKey + "Form"];
    if (form) {
        var topOfFormElem = document.getElementById("topOf" + screenKey + "Form");
        topOfFormElem.innerHTML = "Use this screen to ..."; 
        var bottomOfFormElem = document.getElementById("bottomOf" + screenKey + "Form");
        bottomOfFormElem.innerHTML = "<a href=\"help.html\">Click here to open help</a>";
    }
*/
}


//Use this method to execute code before a submit occurs. One example of such a usecase would be
//adding custom validation to a page. 
//You can also modify the workflow message before it is sent to the server, like for a computed value.
//Return false to prevent the submit from occurring. 
function customBeforeSubmit(screenKey, actionName, workflowMessageToSend) {
/*
    if (screenKey == "Create" && (actionName == "Submit")) {
        var form = document.forms[screenKey + "Form"];
        if (form) {
            var itemCostVal = form.ExpenseTracking_create_itemCost_paramKey.value;
            if (itemCostVal >= 1000) {
                showAlertDialog("Warning, Items costing $1000 or more must also be approved by the accounting department.");
                return true;
            }
        }
    }
*/
/*
	// examine/save/modify the data before the submit action
	if ((screenKey === "Search") && (actionName === "By_First_Name")) {
		// ** Style 1 **
		// store data in a simple global variable by using 'var myGlobalVariable' at the top of this file.
		myGlobalVariable = new Date();

		// ** Style 2 **
		// store data in the HTML 'form' variable
		var form = document.forms[screenKey + "Form"];
		if (form) {
			form.MyGetTheServerData_Var1 = "a value to save away";
			form.MyGetTheServerData_TimeStamp = new Date();
		}

		// ** Style 3 **
		// Can also manipulate the workflow message itself
		var myNewValue1 = new MessageValue();
		myNewValue1.setKey("myKey1");
		myNewValue1.setValue(42);
		myNewValue1.setType("NUMBER");

		var myNewValue2 = new MessageValue();
		myNewValue2.setKey("myKey2");
		myNewValue2.setValue( new Date() );
		myNewValue2.setType("DATETIME");

		var mvc = workflowMessageToSend.getValues();
		if( mvc ) {
			mvc.add( myNewValue1.getKey(), myNewValue1 );
			mvc.add( myNewValue2.getKey(), myNewValue2 );
		}
	}	
*/
    return true;
}

//Use this method to execute code after a submit occurs.
function customAfterSubmit(screenKey, actionName) {
/*
	// Examine/save/modify the data after the event processing
	if((screenKey === "Search") && (actionName === "By_First_Name")) {
		// ** Style 1 **
		// the 'myGlobalVariable'
		var timeDiff1 = new Date() - myGlobalVariable;

		// ** Style 2 **
		// the HTML 'form' variable
		var form = document.forms[screenKey + "Form"];
		if (form) {
			// do something with the time difference...
			var timeDiff2 = new Date() - form.MyGetTheServerData_TimeStamp;
		}

		// ** Style 3 **
		// pull data out of the workflow message itself
		var mvc = getCurrentMessageValueCollection();
		if( mvc ) {
			var myValue0 = mvc.getData( "firstNameKey" );
			var myValue1 = mvc.getData( "privateServerData1" );
			var myValue2 = mvc.getData( "privateServerData2" );
		}
	}
*/
}


//Use this method to add custom code to a forward screen transition. If you return false, the screen
//transition will not occur.
function customBeforeNavigateForward(screenKey, destScreenKey) {
//	if (destScreenKey == 'Requisi__es') {
//		var message      = getCurrentMessageValueCollection();
//		var itemList     = message.getData("PurchaseReqList");
//		var items        = itemList.val();
//		
////		for(var i=0; i < items.length; i++) {
////			var errorMessage = items[i].getData("ErrorLogMessage").getValue();
////			var errorArray = errorMessage.split(";");
////			errorMessage = errorArray[5];
////		}
////		var qtdItens = items.lengh;
//		showAlertDialog("items: (" + items + ")"); 
//		
//	} 
/*
    if (screenKey == "Desc" && (destScreenKey === "Create"))
    {
        var form = document.forms[screenKey + "Form"];
        if (form)
        {
            var desc = form.ExpenseTracking_create_itemDesc_paramKey.value;
            var reason = form.ExpenseTracking_create_reason_paramKey.value;
            if (desc.length == 0 && (reason.length == 0 )) {
                var helpElem = document.getElementById(screenKey + "Form_help");
                setValidationText(helpElem, "Desc or reason must be provided.  Preferably both.");
                return false;
            }
        }
    }
*/
    return true;
}

//Use this method to add custom code after a forward screen transition
function customAfterNavigateForward(screenKey, destScreenKey) {
}

//Use this method to add custom code to a backward screen transition. If you return false, the screen
//transition will not occur.
function customBeforeNavigateBackward(screenKey, isCancelled) {
    return true;
}

//Use this method to add custom code after a backward screen transition
function customAfterNavigateBackward(screenKey, isCancelled) {
}

//Use this method to add custom code when a screen is shown. If you return false, the default
//behavior will not occur.
function customBeforeShowScreen(screenToShow, screenToHide) {
	if (screenToShow == 'Requisi__es' && screenToHide == 'Login') {
		// Mensagem de erro no login
		var userLogin 		= $("#cc_username").val();
		var passwordLogin 	= $("#cc_password").val();
		
		if (userLogin == ''){
			showAlertDialog("Necessário informar o Usuário");
			 menuItemCallbackRequisi__esCancel();
		} else if (passwordLogin == ''){
			showAlertDialog("Necessário informar a senha");
			menuItemCallbackRequisi__esCancel();
		} else {
			// Sempre atualizar os resultados antes de mostrar a lista de requisições
			menuItemCallbackRequisi__esAtualizar();
			return true;
		}
	} 
	else if (screenToShow == 'Requisi__es') {
		// Sempre atualizar os resultados antes de mostrar a lista de requisições
		menuItemCallbackRequisi__esAtualizar();
        return true;
    }
    else if (screenToShow == 'Detalhes' && screenToHide == 'Sucesso') {
		// Retornar da tela de sucesso para requisições
        menuItemCallbackDetalhesCancel();
        return false;
    }
    else if (screenToShow == 'Detalhes') {
		// Sempre atualizar os resultados antes de mostrar o Detalhe da Requisi��o
		menuItemCallbackDetalhesAtualizar();
        return true;
    }
    else if (screenToShow == 'Motivo' && screenToHide == 'Sucesso') {
    	// Retornar da tela de sucesso para requisições
        menuItemCallbackDetalhesCancel();
        return false;
    }
    else if (screenToShow == 'Sucesso') {
        var element = document.getElementById('mensagem_sucesso');
        if (screenToHide == 'Motivo') {            
            element.innerHTML = "Requisição de compras '" + PurchaseReqList_INSTID_attribKey.value + "' rejeitada com sucesso pelo motivo '" + motivo_rejeicao.value + "'.";
        }
        else if (screenToHide == 'Detalhes') {            
            element.innerHTML = "Requisição de compras '" + PurchaseReqList_INSTID_attribKey.value + "' aprovada com sucesso.";        
        }
        return true;
    } else if (screenToShow == 'ErrorList'){
    	try {
			var errorMessages = "" ;
			var message      = getCurrentMessageValueCollection();
			var itemList     = message.getData("ErrorLogs");
			var items        = itemList.getValue();
			for(var i=0; i < items.length; i++) {
				var errorMessage = items[i].getData("ErrorLogMessage").getValue();
				var errorArray = errorMessage.split(";");
				errorMessage = errorArray[5];
			}		
			
//			showAlertDialog("Erro ao processar: errorMessage (" + errorMessage + ") - (" + itemList + ")");
			
//			if (errorMessage == 1){
//				showAlertDialog("Não foi poss�vel aprovar o item de workflow para a requisição");
//			} else if (errorMessage == 2){
//				var numRequisicao = $("#PurchaseReqList_INSTID_attribKey").val();
//				showAlertDialog("Requisição " + numRequisicao + " já havia sido aprovada");
//			} else if (errorMessage == 3){
//				showAlertDialog("Não foi poss�vel liberar o item de workflow da requisição (foreground)");
//			} else if (errorMessage == 4){
//				showAlertDialog("Documento sendo editado, Não é poss�vel liberar");
//			} else if (errorMessage == 9){
//				showAlertDialog("Erro genérico. Não foi aprovado o documento");
//			} else {
//				showAlertDialog("Ocorreu um erro inexperado. RC: " + errorMessage);
//			}
			
		} catch(e) {
			showAlertDialog("Ocorreu um erro inexperado");
		}
		return true;
    }
    else {
    	return true;
    }
}

//Use this method to add custom code after a screen is shown.
function customAfterShowScreen(screenToShow, screenToHide) {
	// Ao tentar um login incorreto, retorna para tela de login. Gerando o erro abaixo 
	if (screenToShow == 'Login' && screenToHide == 'Requisi__es') {
	    showAlertDialog("Favor verifique o usuário e senha. Tente novamente");	
	}
}

//Use this method to add custom validate code to a screen
function customValidateScreen(screenKey, values) {
/*
    var rc = true;
    if (screenKey === "Create")
    {
        var form = document.forms[screenKey + "Form"];
        if (form)
        {
            var cost = form.ExpenseTracking_create_itemCost_paramKey.value;
            var LName = form.ExpenseTracking_create_lastName_paramKey.value;
            if (cost > 500 && (LName === "van Leeuwen")) {
                var helpElem = document.getElementById(screenKey + "_" + controlKey + "_help");
                setValidationText(helpElem, "Sorry Dan, you are on a short leash with the company credit card.");
                return false;
            }
        }
    }
*/
    return true;
}

//Use this method to add custom code when a menu item is clicked. If you return false, the default
//behavior will not be executed.
function customBeforeMenuItemClick(screen, menuItem) {
	
//	if (screen === "Detalhes" && menuItem === "Aprovar") {
//		var teste1 		= $("#ErrorLogs").val(); 
//		showAlertDialog(teste1);
//	}
//	if (screen === "Requisi__es" && menuItem === "Sair") {
//		return confirm("Deseja sair do Requisição de compras?");
//    } else if (screen === "Detalhes" && menuItem === "Aprovar") {
//    	var userConfirm = hwc.showConfirmDialog( "Are you sure you want to see an alert message?", "Confirm Alert" );
//    	if( userConfirm )
//    	{
//    	   alert( "This is what you wanted." );
//    	}
////        return showConfirmDialog("Confirma aprovar esta Requisição?");
////    } else if (screen === "Motivo" && menuItem === "Rejeitar") {
////        return showConfirmDialog("Confirma rejeitar esta Requisição?");
//    }
/*
    if (screen === "Create" && menuItem === "Quit") {
        return confirm("Are you sure you want to quit?");
    }
*/
    return true;
}


//Use this method to add custom code after a menu item has been clicked and the default behavior
//has been executed.
function customAfterMenuItemClick(screen, menuItem) {
//    if (screen === "Detalhes" && menuItem === "Aprovar") {
        //showAlertDialog("Requisição aprovada com sucesso.");        
//        navigator.notification.alert("oi", null, "Olá!", "XXX");
//        navigator.notification.confirm("Requisição aprovada com sucesso.", menuItemCallbackDetalhesCancel(), "Aviso", "OK");
        //getCurrentScreen().navigateBack(true, false);
                
//    }
}

//Use this method to add custom code before a screen is saved. If you return false, the default
//behavior will not be executed. 
function customBeforeSave(screen) {
    return true;
}

//Use this method to add custom code after a screen is saved.
function customAfterSave(screen) {
}
/**
 * Handle whether to execute a conditional navigation.
 * @param currentScreenKey The current screen
 * @param actionKeyName The originating action of the workflow message
 * @param defaultNextScreen The original default next screen, which will be executed if this returns false.
 * @param conditionName The name of the check to perform, in the context of this screen and action.  Set in the IDE.
 * @param workflowMessage The incoming workflow for any calculations.
 * @returns (true) in order to execute the matching workflow screen.  By default this returns (false).
 */
function customConditionalNavigation(currentScreenKey, actionKeyName, defaultNextScreen, conditionName, workflowMessage) {
	
/*
    // example code
    if((currentScreenKey === SERVERINITIATEDFLAG) && (actionKeyName === '')) {
        // conditional start screen uses this magic screen key and the empty action name.
        if( conditionName === 'Marge') {
            // custom logic
            return true;
        }
        else if(conditionName === 'Lisa'){
            // custom logic
            // return true or false
            return false;
        }
    }
    else if((currentScreenKey === 'Search') && (actionKeyName === 'By_First_Name')) {
        if( conditionName === 'Marge') {
            // custom logic
            return true;
        }
        else if(conditionName === 'Lisa'){
            // custom logic
            // return true or false
            return false;
        }
        else if(conditionName === 'Maggie'){
            // custom logic
            // return true or false
            return true;
        }
    }
	else if((defaultNextScreen === 'Employees') || (currentScreenKey === 'Search')) {
		if( conditionName === 'Marge') {
			// custom logic
			return true;
		}
		else if(conditionName === 'Lisa'){
			// custom logic
			// return true or false
			return false;
		}
		else if(conditionName === 'Maggie'){
			// custom logic
			// return true or false
			return true;
		}
	}
*/    
    // default case is to NOT change the flow
    return false;
}
//Use this method to add custom code when a native error is reported. If you return false, the default
//behavior will not be executed.
function customBeforeReportErrorFromNative(errorString) {
/*
    var callbackMethod = getURLParamFromNativeError("onErrorCallback", errorString);
    var errorCode = getURLParamFromNativeError("errCode", errorString);
    var onErrorMsg = getURLParamFromNativeError("onErrorMsg", errorString);
    var nativeMsg = getURLParamFromNativeError("nativeErrMsg", errorString);
    if (onErrorMsg || nativeMsg) {
        closeWorkflow();
    }
*/
    return true;
}

//Use this method to add custom code after a native error is reported
function customAfterReportErrorFromNative(errorString) {
}

// Camera and picture methods.
// Use this method to get a picture URI from the camera for submission in the workflow message
function customGetPictureURIFromCamera() {
	getPicture(customGetPictureError, 
	           customGetPictureURISuccess, 
	           { sourceType: PictureOption.SourceType.CAMERA,
                 destinationType: PictureOption.DestinationType.IMAGE_URI}
               );
}

// Use this method to get a picture URI from the photo library for submission in the workflow message.
function customGetPictureURIFromLibrary() {
	getPicture(customGetPictureError, 
	           customGetPictureURISuccess, 
	           { sourceType: PictureOption.SourceType.PHOTOLIBRARY,
                 destinationType: PictureOption.DestinationType.IMAGE_URI}
               );
}

// This callback handles getPictureURI success and inserts a new MessageValue with the URI into the workflow message.
// Set the key value appropriately
function customGetPictureURISuccess(fileName, imageURI ){
	var pictureURIValue = new MessageValue();
	pictureURIValue.setKey("");					// Must be set by the user.
	pictureURIValue.setValue(imageURI);
	pictureURIValue.setType(MessageValueType.FILE);
	var mvc = getWorkflowMessage().getValues();
	if( mvc ) {
		mvc.add( pictureURIValue.getKey(), pictureURIValue );
		getWorkflowMessage().setHasFileMessageValue(true);			// Must be set when using the URI option.
		// Add a message value for the MIME type of the image if desired.
		//var mimeType = getMimeType(fileName);
		//var mimeMessageValue = new MessageValue();
		//mimeMessageValue.setKey("");				// Must be set by the user.
		//mimeMessageValue.setValue(mimeType);
		//mimeMessageValue.setType(MessageValueType.TEXT);
		//mvc.add(mimeMessageValue.getKey(), mimeMessageValue);
	}	
}

// Use this method to get picture data from the camera for submission in the workflow message.
// Note, the picture data length can be to large for the workflow
function customGetPictureDataFromCamera(){
	getPicture(customGetPictureError, 
	           customGetPictureDataSuccess, 
	           { sourceType: PictureOption.SourceType.CAMERA,
                 destinationType: PictureOption.DestinationType.IMAGE_DATA}
               );
}

// Use this method to get picture data from the photo library for submission in the workflow message.
// Note, the picture data length can be to large for the workflow
function customGetPictureDataFromLibrary(){
	getPicture(customGetPictureError, 
	           customGetPictureDataSuccess, 
	           { sourceType: PictureOption.SourceType.PHOTOLIBRARY,
                 destinationType: PictureOption.DestinationType.IMAGE_DATA}
               );
}

// This callback handles getPictureData success and inserts a new MessageValue with the image data 
// into with the workflow message. Note, it is possible that this image data is too long for the workflow message
// Set the key value appropriately
function customGetPictureDataSuccess(fileName, imageData ){
	var pictureDataValue = new MessageValue();
	pictureDataValue.setKey("");					// Must be set by the user.
	pictureDataValue.setValue(imageData);
	pictureDataValue.setType(MessageValueType.TEXT);
	var mvc = getWorkflowMessage().getValues();
	if( mvc ) {
		mvc.add( pictureDataValue.getKey(), pictureDataValue );
		// Add a message value for the MIME type of the image if desired.
		//var mimeType = getMimeType(fileName);
		//var mimeMessageValue = new MessageValue();
		//mimeMessageValue.setKey("");				// Must be set by the user.
		//mimeMessageValue.setValue(mimeType);
		//mimeMessageValue.setType(MessageValueType.TEXT);
		//mvc.add(mimeMessageValue.getKey(), mimeMessageValue);
	}	
}

// This callback handles a picture error.
function customGetPictureError(result){
	alert("customGetPictureError result: " + result)
}

function getMimeType(fileName) {
	var lastPeriod = fileName.lastIndexOf(".");
	var extension = fileName.substr(lastPeriod + 1);
	if (extension === "jpg") {
		extension = "jpeg";
	}
	var mimeType = "image/" + extension;
	return mimeType;
}

//Use this method to add custom code after data is received
//For example, this method can be used to manipulate a datetime field
//and parse it to just a date or just a time part.  
function customAfterDataReceived(incomingWorkflowMessage) {
/*
    //  this example shows the manipulation of a dropdown list
    //  with datetime values being parsed to only date values.

    //  get the values from workflow
    var mvc = incomingWorkflowMessage.getValues();
    if (mvc) {
        //  look up specific messagevalue
        var deptid = narrowTo(mvc, "_options.dept_id");
        if (deptid) {
            //  get its data value
            var deptidVal = deptid.value;

            //  in this case it is a dropdown list, the display/data values are separated by $
            var idx1 = deptidVal.indexOf("$");
            var deptidVal1 = deptidVal.substring(0,idx1);
            var deptidVal2 = deptidVal.substring(idx1+1);

            var idx2 = deptidVal1.indexOf(" ");
            var deptIDDisp1 = deptidVal1.substring(0,idx2);

            idx2 = deptidVal2.indexOf(" ");
            var deptIDDisp2 = deptidVal2.substring(0,idx2);

            var newVal = deptIDDisp1 + "$" + deptIDDisp2;
            //  set the new value back in the workflow values collection
            mvc.setKey( "_options.dept_id" );
            mvc.setState("update");
            deptid.setValue(newVal);
            mvc.add( "_options.dept_id", deptid);
        }
    }
*/
}

//This method is called at the end of the method updateUIFromMessageValueCollection
function customAfterUpdateUI(screenKey) {
//	showAlertDialog("customAfterUpdateUI - screenKey(" + screenKey + ")");
//	if (screenKey == 'Detalhes' || screenKey == 'Requisi__es') {
//	if (screenKey == 'Requisi__es') {
//		var message      = getCurrentMessageValueCollection();
//		var itemList     = message.getData("PurchaseReqList");
//		var items        = itemList.getValue();
//		
////		for(var i=0; i < items.length; i++) {
////			var errorMessage = items[i].getData("ErrorLogMessage").getValue();
////			var errorArray = errorMessage.split(";");
////			errorMessage = errorArray[5];
////		}
//		var qtdItens = items.lengh;
////		showAlertDialog("PurchaseReqList: (" + qtdItens + ")"); 
//		
//	} else 
	if (screenKey == 'Detalhes') {
		var valorRequisicao = $("#PurchaseReqList_RLWRT_attribKey").val();
		
		var divisorDecimal = valorRequisicao.indexOf('.');
		if (divisorDecimal !== -1) {
			valorRequisicao = valorRequisicao.replace('.',',');
		} 
		
		var index = valorRequisicao.indexOf(',');
		var tamanhoTotal = valorRequisicao.length;
		tamanhoTotal = tamanhoTotal - index;
		
		if( index === -1) {
			valorRequisicao = valorRequisicao + ",00";
        }else if( tamanhoTotal === 2 ){
        	valorRequisicao = valorRequisicao + "0";
        }
		
		var v = valorRequisicao.replace(/(\d{1,3})$/g,"$1");
		v=v.replace(/\D/g,"");//Remove tudo o que n�o � d�gito
		v=v.replace(/(\d)(\d{14})$/,"$1.$2");
		v=v.replace(/(\d)(\d{11})$/,"$1.$2");
		v=v.replace(/(\d)(\d{8})$/,"$1.$2");//coloca o ponto dos milh�es
		v=v.replace(/(\d)(\d{5})$/,"$1.$2");//coloca o ponto dos milhares
		v=v.replace(/(\d)(\d{2})$/,"$1,$2");//coloca a virgula antes dos 2 �ltimos d�gitos
		valorRequisicao = v;
		
		$("#PurchaseReqList_RLWRT_attribKey").val(valorRequisicao);
		
	}
}
