/*
 * Sybase Mobile Workflow version 2.1.3
 * 
 * Workflow.js
 * This file will be regenerated, so changes made herein will be removed the
 * next time the workflow is regenerated. It is therefore strongly recommended
 * that the user not make changes in this file.
 * 
 * The template used to create this file was compiled on Thu Sep 20 06:45:26 BRT 2012
 *
 * Copyright (c) 2010, 2011 Sybase Inc. All rights reserved.
 */



function menuItemCallbackLoginSair() {
    if (!customBeforeMenuItemClick('Login', 'Sair')) {
        return;
    }
    closeWorkflow();
    customAfterMenuItemClick('Login', 'Sair');
}


function menuItemCallbackLoginEnter_Login() {
    if (!customBeforeMenuItemClick('Login', 'Enter_Login')) {
        return;
    }
    navigateForward('Requisi__es');
    customAfterMenuItemClick('Login', 'Enter_Login');
}
function menuItemCallbackErrorListCancel() {
    if (!customBeforeMenuItemClick('ErrorList', 'Cancel')) {
        return;
    }
    doCancelAction();
    customAfterMenuItemClick('ErrorList', 'Cancel');
}
function menuItemCallbackErrorDetailCancel() {
    if (!customBeforeMenuItemClick('ErrorDetail', 'Cancel')) {
        return;
    }
    doCancelAction();
    customAfterMenuItemClick('ErrorDetail', 'Cancel');
}


function menuItemCallbackDetalhesAprovar() {
    if (!customBeforeMenuItemClick('Detalhes', 'Aprovar')) {
        return;
    }
    var rmiKeys = [];
    var rmiKeyTypes = [];
    var rmiInputOnlyKeys = [];
    var rmiInputOnlyKeyTypes = [];
    rmiKeys[0] = 'PurchaseReqList_INSTID_attribKey';
    rmiKeyTypes[0] = 'TEXT';
    rmiKeys[1] = '_old.PurchaseReqList.INSTID';
    rmiKeyTypes[1] = 'TEXT';
    rmiKeys[2] = 'ErrorLogs';
    rmiKeyTypes[2] = 'LIST';
    rmiKeys[3] = 'PurchaseReqList_USER_ID_attribKey';
    rmiKeyTypes[3] = 'TEXT';
    rmiKeys[4] = '_old.PurchaseReqList.USER_ID';
    rmiKeyTypes[4] = 'TEXT';
    rmiKeys[5] = 'PurchaseReqList_WI_ID_attribKey';
    rmiKeyTypes[5] = 'TEXT';
    rmiKeys[6] = '_old.PurchaseReqList.WI_ID';
    rmiKeyTypes[6] = 'TEXT';
    rmiKeys[7] = 'PurchaseReqList_TASK_OBJ_attribKey';
    rmiKeyTypes[7] = 'TEXT';
    rmiKeys[8] = '_old.PurchaseReqList.TASK_OBJ';
    rmiKeyTypes[8] = 'TEXT';
    rmiKeys[9] = 'PurchaseReqList_MANDT_attribKey';
    rmiKeyTypes[9] = 'TEXT';
    rmiKeys[10] = '_old.PurchaseReqList.MANDT';
    rmiKeyTypes[10] = 'TEXT';
    rmiKeys[11] = 'PurchaseReqList_WI_TYPE_attribKey';
    rmiKeyTypes[11] = 'TEXT';
    rmiKeys[12] = '_old.PurchaseReqList.WI_TYPE';
    rmiKeyTypes[12] = 'TEXT';
    rmiKeys[13] = 'PurchaseReqList_WI_CD_attribKey';
    rmiKeyTypes[13] = 'DATETIME';
    rmiKeys[14] = '_old.PurchaseReqList.WI_CD';
    rmiKeyTypes[14] = 'DATETIME';
    rmiKeys[15] = 'PurchaseReqList_WI_TEXT_attribKey';
    rmiKeyTypes[15] = 'TEXT';
    rmiKeys[16] = '_old.PurchaseReqList.WI_TEXT';
    rmiKeyTypes[16] = 'TEXT';
    rmiKeys[17] = 'PurchaseReqList_CATID_attribKey';
    rmiKeyTypes[17] = 'TEXT';
    rmiKeys[18] = '_old.PurchaseReqList.CATID';
    rmiKeyTypes[18] = 'TEXT';
    rmiKeys[19] = 'PurchaseReqList_TYPEID_attribKey';
    rmiKeyTypes[19] = 'TEXT';
    rmiKeys[20] = '_old.PurchaseReqList.TYPEID';
    rmiKeyTypes[20] = 'TEXT';
    rmiKeys[21] = 'PurchaseReqList_TOP_WI_ID_attribKey';
    rmiKeyTypes[21] = 'TEXT';
    rmiKeys[22] = '_old.PurchaseReqList.TOP_WI_ID';
    rmiKeyTypes[22] = 'TEXT';
    rmiKeys[23] = 'PurchaseReqList_RLWRT_attribKey';
    rmiKeyTypes[23] = 'NUMBER';
    rmiKeys[24] = '_old.PurchaseReqList.RLWRT';
    rmiKeyTypes[24] = 'NUMBER';
    rmiKeys[25] = 'PurchaseReqList_Requisitante_attribKey';
    rmiKeyTypes[25] = 'TEXT';
    rmiKeys[26] = '_old.PurchaseReqList.Requisitante';
    rmiKeyTypes[26] = 'TEXT';
    rmiKeys[27] = 'PurchaseReqList_Data_criacao_attribKey';
    rmiKeyTypes[27] = 'DATETIME';
    rmiKeys[28] = '_old.PurchaseReqList.Data_criacao';
    rmiKeyTypes[28] = 'DATETIME';
    rmiKeys[29] = 'PurchaseReqList_TEXT_HEADER_attribKey';
    rmiKeyTypes[29] = 'TEXT';
    rmiKeys[30] = '_old.PurchaseReqList.TEXT_HEADER';
    rmiKeyTypes[30] = 'TEXT';
    rmiKeys[31] = 'PurchaseReqList_TYPE_attribKey';
    rmiKeyTypes[31] = 'TEXT';
    rmiKeys[32] = '_old.PurchaseReqList.TYPE';
    rmiKeyTypes[32] = 'TEXT';
    rmiKeys[33] = 'PurchaseReqList_DATE_START_attribKey';
    rmiKeyTypes[33] = 'DATETIME';
    rmiKeys[34] = '_old.PurchaseReqList.DATE_START';
    rmiKeyTypes[34] = 'DATETIME';
    rmiKeys[35] = 'PurchaseReqList_DATE_END_attribKey';
    rmiKeyTypes[35] = 'DATETIME';
    rmiKeys[36] = '_old.PurchaseReqList.DATE_END';
    rmiKeyTypes[36] = 'DATETIME';
    rmiInputOnlyKeys[0] = 'PurchaseReqList_INSTID_attribKey';
    rmiInputOnlyKeyTypes[0] = 'TEXT';
    rmiInputOnlyKeys[1] = '_old.PurchaseReqList.INSTID';
    rmiInputOnlyKeyTypes[1] = 'TEXT';
    rmiInputOnlyKeys[2] = 'ErrorLogs';
    rmiInputOnlyKeyTypes[2] = 'LIST';
    rmiInputOnlyKeys[3] = 'PurchaseReqList_USER_ID_attribKey';
    rmiInputOnlyKeyTypes[3] = 'TEXT';
    rmiInputOnlyKeys[4] = '_old.PurchaseReqList.USER_ID';
    rmiInputOnlyKeyTypes[4] = 'TEXT';
    rmiInputOnlyKeys[5] = 'PurchaseReqList_WI_ID_attribKey';
    rmiInputOnlyKeyTypes[5] = 'TEXT';
    rmiInputOnlyKeys[6] = '_old.PurchaseReqList.WI_ID';
    rmiInputOnlyKeyTypes[6] = 'TEXT';
    rmiInputOnlyKeys[7] = 'PurchaseReqList_TASK_OBJ_attribKey';
    rmiInputOnlyKeyTypes[7] = 'TEXT';
    rmiInputOnlyKeys[8] = '_old.PurchaseReqList.TASK_OBJ';
    rmiInputOnlyKeyTypes[8] = 'TEXT';
    rmiInputOnlyKeys[9] = 'PurchaseReqList_MANDT_attribKey';
    rmiInputOnlyKeyTypes[9] = 'TEXT';
    rmiInputOnlyKeys[10] = '_old.PurchaseReqList.MANDT';
    rmiInputOnlyKeyTypes[10] = 'TEXT';
    rmiInputOnlyKeys[11] = 'PurchaseReqList_WI_TYPE_attribKey';
    rmiInputOnlyKeyTypes[11] = 'TEXT';
    rmiInputOnlyKeys[12] = '_old.PurchaseReqList.WI_TYPE';
    rmiInputOnlyKeyTypes[12] = 'TEXT';
    rmiInputOnlyKeys[13] = 'PurchaseReqList_WI_CD_attribKey';
    rmiInputOnlyKeyTypes[13] = 'DATETIME';
    rmiInputOnlyKeys[14] = '_old.PurchaseReqList.WI_CD';
    rmiInputOnlyKeyTypes[14] = 'DATETIME';
    rmiInputOnlyKeys[15] = 'PurchaseReqList_WI_TEXT_attribKey';
    rmiInputOnlyKeyTypes[15] = 'TEXT';
    rmiInputOnlyKeys[16] = '_old.PurchaseReqList.WI_TEXT';
    rmiInputOnlyKeyTypes[16] = 'TEXT';
    rmiInputOnlyKeys[17] = 'PurchaseReqList_CATID_attribKey';
    rmiInputOnlyKeyTypes[17] = 'TEXT';
    rmiInputOnlyKeys[18] = '_old.PurchaseReqList.CATID';
    rmiInputOnlyKeyTypes[18] = 'TEXT';
    rmiInputOnlyKeys[19] = 'PurchaseReqList_TYPEID_attribKey';
    rmiInputOnlyKeyTypes[19] = 'TEXT';
    rmiInputOnlyKeys[20] = '_old.PurchaseReqList.TYPEID';
    rmiInputOnlyKeyTypes[20] = 'TEXT';
    rmiInputOnlyKeys[21] = 'PurchaseReqList_TOP_WI_ID_attribKey';
    rmiInputOnlyKeyTypes[21] = 'TEXT';
    rmiInputOnlyKeys[22] = '_old.PurchaseReqList.TOP_WI_ID';
    rmiInputOnlyKeyTypes[22] = 'TEXT';
    rmiInputOnlyKeys[23] = 'PurchaseReqList_RLWRT_attribKey';
    rmiInputOnlyKeyTypes[23] = 'NUMBER';
    rmiInputOnlyKeys[24] = '_old.PurchaseReqList.RLWRT';
    rmiInputOnlyKeyTypes[24] = 'NUMBER';
    rmiInputOnlyKeys[25] = 'PurchaseReqList_Requisitante_attribKey';
    rmiInputOnlyKeyTypes[25] = 'TEXT';
    rmiInputOnlyKeys[26] = '_old.PurchaseReqList.Requisitante';
    rmiInputOnlyKeyTypes[26] = 'TEXT';
    rmiInputOnlyKeys[27] = 'PurchaseReqList_Data_criacao_attribKey';
    rmiInputOnlyKeyTypes[27] = 'DATETIME';
    rmiInputOnlyKeys[28] = '_old.PurchaseReqList.Data_criacao';
    rmiInputOnlyKeyTypes[28] = 'DATETIME';
    rmiInputOnlyKeys[29] = 'PurchaseReqList_TEXT_HEADER_attribKey';
    rmiInputOnlyKeyTypes[29] = 'TEXT';
    rmiInputOnlyKeys[30] = '_old.PurchaseReqList.TEXT_HEADER';
    rmiInputOnlyKeyTypes[30] = 'TEXT';
    rmiInputOnlyKeys[31] = 'PurchaseReqList_TYPE_attribKey';
    rmiInputOnlyKeyTypes[31] = 'TEXT';
    rmiInputOnlyKeys[32] = '_old.PurchaseReqList.TYPE';
    rmiInputOnlyKeyTypes[32] = 'TEXT';
    rmiInputOnlyKeys[33] = 'PurchaseReqList_DATE_START_attribKey';
    rmiInputOnlyKeyTypes[33] = 'DATETIME';
    rmiInputOnlyKeys[34] = '_old.PurchaseReqList.DATE_START';
    rmiInputOnlyKeyTypes[34] = 'DATETIME';
    rmiInputOnlyKeys[35] = 'PurchaseReqList_DATE_END_attribKey';
    rmiInputOnlyKeyTypes[35] = 'DATETIME';
    rmiInputOnlyKeys[36] = '_old.PurchaseReqList.DATE_END';
    rmiInputOnlyKeyTypes[36] = 'DATETIME';
    var workflowMessageToSend = getMessageValueCollectionForOnlineRequest('Detalhes', 'Aprovar', rmiKeys, rmiKeyTypes);
    var inputOnlyWorkflowMessageToSend = getMessageValueCollectionForOnlineRequest('Detalhes', 'Aprovar', rmiInputOnlyKeys, rmiInputOnlyKeyTypes);
    if (validateScreen('Detalhes', getCurrentMessageValueCollection(), rmiKeys) && 
        saveScreens(true)) {
        doOnlineRequest('Detalhes', 'Aprovar', 60, 0, '', null, workflowMessageToSend, inputOnlyWorkflowMessageToSend.serializeToString());
    }
    customAfterMenuItemClick('Detalhes', 'Aprovar');
}


function menuItemCallbackDetalhesRejeitar() {
    if (!customBeforeMenuItemClick('Detalhes', 'Rejeitar')) {
        return;
    }
    navigateForward('Motivo');
    customAfterMenuItemClick('Detalhes', 'Rejeitar');
}


function menuItemCallbackDetalhesAtualizar() {
    if (!customBeforeMenuItemClick('Detalhes', 'Atualizar')) {
        return;
    }
    var rmiKeys = [];
    var rmiKeyTypes = [];
    var rmiInputOnlyKeys = [];
    var rmiInputOnlyKeyTypes = [];
    rmiKeys[0] = 'PurchaseReqList_INSTID_attribKey';
    rmiKeyTypes[0] = 'TEXT';
    rmiKeys[1] = '_old.PurchaseReqList.INSTID';
    rmiKeyTypes[1] = 'TEXT';
    rmiInputOnlyKeys[0] = 'PurchaseReqList_INSTID_attribKey';
    rmiInputOnlyKeyTypes[0] = 'TEXT';
    rmiInputOnlyKeys[1] = '_old.PurchaseReqList.INSTID';
    rmiInputOnlyKeyTypes[1] = 'TEXT';
    var workflowMessageToSend = getMessageValueCollectionForOnlineRequest('Detalhes', 'Atualizar', rmiKeys, rmiKeyTypes);
    var inputOnlyWorkflowMessageToSend = getMessageValueCollectionForOnlineRequest('Detalhes', 'Atualizar', rmiInputOnlyKeys, rmiInputOnlyKeyTypes);
    if (validateScreen('Detalhes', getCurrentMessageValueCollection(), rmiKeys) && 
        saveScreens(true)) {
        doOnlineRequest('Detalhes', 'Atualizar', 60, 0, '', null, workflowMessageToSend, inputOnlyWorkflowMessageToSend.serializeToString());
    }
    customAfterMenuItemClick('Detalhes', 'Atualizar');
}
function menuItemCallbackDetalhesCancel() {
    if (!customBeforeMenuItemClick('Detalhes', 'Cancel')) {
        return;
    }
    doCancelAction();
    customAfterMenuItemClick('Detalhes', 'Cancel');
}


function menuItemCallbackRequisi__esSair() {
    if (!customBeforeMenuItemClick('Requisi__es', 'Sair')) {
        return;
    }
    closeWorkflow();
    customAfterMenuItemClick('Requisi__es', 'Sair');
}


function menuItemCallbackRequisi__esAtualizarButton() {
    if (!customBeforeMenuItemClick('Requisi__es', 'AtualizarButton')) {
        return;
    }
    var rmiKeys = [];
    var rmiKeyTypes = [];
    var rmiInputOnlyKeys = [];
    var rmiInputOnlyKeyTypes = [];
    var workflowMessageToSend = getMessageValueCollectionForOnlineRequest('Requisi__es', 'AtualizarButton', rmiKeys, rmiKeyTypes);
    var inputOnlyWorkflowMessageToSend = getMessageValueCollectionForOnlineRequest('Requisi__es', 'AtualizarButton', rmiInputOnlyKeys, rmiInputOnlyKeyTypes);
    if (validateScreen('Requisi__es', getCurrentMessageValueCollection(), rmiKeys) && 
        saveScreens(true)) {
        doOnlineRequest('Requisi__es', 'AtualizarButton', 60, 0, '', null, workflowMessageToSend, inputOnlyWorkflowMessageToSend.serializeToString());
    }
    customAfterMenuItemClick('Requisi__es', 'AtualizarButton');
}


function menuItemCallbackRequisi__esAtualizar() {
    if (!customBeforeMenuItemClick('Requisi__es', 'Atualizar')) {
        return;
    }
    var rmiKeys = [];
    var rmiKeyTypes = [];
    var rmiInputOnlyKeys = [];
    var rmiInputOnlyKeyTypes = [];
    var workflowMessageToSend = getMessageValueCollectionForOnlineRequest('Requisi__es', 'Atualizar', rmiKeys, rmiKeyTypes);
    var inputOnlyWorkflowMessageToSend = getMessageValueCollectionForOnlineRequest('Requisi__es', 'Atualizar', rmiInputOnlyKeys, rmiInputOnlyKeyTypes);
    if (validateScreen('Requisi__es', getCurrentMessageValueCollection(), rmiKeys) && 
        saveScreens(true)) {
        doOnlineRequest('Requisi__es', 'Atualizar', 60, 0, '', null, workflowMessageToSend, inputOnlyWorkflowMessageToSend.serializeToString());
    }
    customAfterMenuItemClick('Requisi__es', 'Atualizar');
}


function menuItemCallbackMotivoRejeitar() {
    if (!customBeforeMenuItemClick('Motivo', 'Rejeitar')) {
        return;
    }
    var rmiKeys = [];
    var rmiKeyTypes = [];
    var rmiInputOnlyKeys = [];
    var rmiInputOnlyKeyTypes = [];
    rmiKeys[0] = 'PurchaseReqList_INSTID_attribKey';
    rmiKeyTypes[0] = 'TEXT';
    rmiKeys[1] = '_old.PurchaseReqList.INSTID';
    rmiKeyTypes[1] = 'TEXT';
    rmiKeys[2] = 'motivo_rejeicao';
    rmiKeyTypes[2] = 'TEXT';
    rmiKeys[3] = 'ErrorLogs';
    rmiKeyTypes[3] = 'LIST';
    rmiKeys[4] = 'PurchaseReqList_USER_ID_attribKey';
    rmiKeyTypes[4] = 'TEXT';
    rmiKeys[5] = '_old.PurchaseReqList.USER_ID';
    rmiKeyTypes[5] = 'TEXT';
    rmiKeys[6] = 'PurchaseReqList_WI_ID_attribKey';
    rmiKeyTypes[6] = 'TEXT';
    rmiKeys[7] = '_old.PurchaseReqList.WI_ID';
    rmiKeyTypes[7] = 'TEXT';
    rmiKeys[8] = 'PurchaseReqList_TASK_OBJ_attribKey';
    rmiKeyTypes[8] = 'TEXT';
    rmiKeys[9] = '_old.PurchaseReqList.TASK_OBJ';
    rmiKeyTypes[9] = 'TEXT';
    rmiKeys[10] = 'PurchaseReqList_MANDT_attribKey';
    rmiKeyTypes[10] = 'TEXT';
    rmiKeys[11] = '_old.PurchaseReqList.MANDT';
    rmiKeyTypes[11] = 'TEXT';
    rmiKeys[12] = 'PurchaseReqList_WI_TYPE_attribKey';
    rmiKeyTypes[12] = 'TEXT';
    rmiKeys[13] = '_old.PurchaseReqList.WI_TYPE';
    rmiKeyTypes[13] = 'TEXT';
    rmiKeys[14] = 'PurchaseReqList_WI_CD_attribKey';
    rmiKeyTypes[14] = 'DATETIME';
    rmiKeys[15] = '_old.PurchaseReqList.WI_CD';
    rmiKeyTypes[15] = 'DATETIME';
    rmiKeys[16] = 'PurchaseReqList_WI_TEXT_attribKey';
    rmiKeyTypes[16] = 'TEXT';
    rmiKeys[17] = '_old.PurchaseReqList.WI_TEXT';
    rmiKeyTypes[17] = 'TEXT';
    rmiKeys[18] = 'PurchaseReqList_CATID_attribKey';
    rmiKeyTypes[18] = 'TEXT';
    rmiKeys[19] = '_old.PurchaseReqList.CATID';
    rmiKeyTypes[19] = 'TEXT';
    rmiKeys[20] = 'PurchaseReqList_TYPEID_attribKey';
    rmiKeyTypes[20] = 'TEXT';
    rmiKeys[21] = '_old.PurchaseReqList.TYPEID';
    rmiKeyTypes[21] = 'TEXT';
    rmiKeys[22] = 'PurchaseReqList_TOP_WI_ID_attribKey';
    rmiKeyTypes[22] = 'TEXT';
    rmiKeys[23] = '_old.PurchaseReqList.TOP_WI_ID';
    rmiKeyTypes[23] = 'TEXT';
    rmiKeys[24] = 'PurchaseReqList_RLWRT_attribKey';
    rmiKeyTypes[24] = 'NUMBER';
    rmiKeys[25] = '_old.PurchaseReqList.RLWRT';
    rmiKeyTypes[25] = 'NUMBER';
    rmiKeys[26] = 'PurchaseReqList_Requisitante_attribKey';
    rmiKeyTypes[26] = 'TEXT';
    rmiKeys[27] = '_old.PurchaseReqList.Requisitante';
    rmiKeyTypes[27] = 'TEXT';
    rmiKeys[28] = 'PurchaseReqList_Data_criacao_attribKey';
    rmiKeyTypes[28] = 'DATETIME';
    rmiKeys[29] = '_old.PurchaseReqList.Data_criacao';
    rmiKeyTypes[29] = 'DATETIME';
    rmiKeys[30] = 'PurchaseReqList_TEXT_HEADER_attribKey';
    rmiKeyTypes[30] = 'TEXT';
    rmiKeys[31] = '_old.PurchaseReqList.TEXT_HEADER';
    rmiKeyTypes[31] = 'TEXT';
    rmiKeys[32] = 'PurchaseReqList_TYPE_attribKey';
    rmiKeyTypes[32] = 'TEXT';
    rmiKeys[33] = '_old.PurchaseReqList.TYPE';
    rmiKeyTypes[33] = 'TEXT';
    rmiKeys[34] = 'PurchaseReqList_DATE_START_attribKey';
    rmiKeyTypes[34] = 'DATETIME';
    rmiKeys[35] = '_old.PurchaseReqList.DATE_START';
    rmiKeyTypes[35] = 'DATETIME';
    rmiKeys[36] = 'PurchaseReqList_DATE_END_attribKey';
    rmiKeyTypes[36] = 'DATETIME';
    rmiKeys[37] = '_old.PurchaseReqList.DATE_END';
    rmiKeyTypes[37] = 'DATETIME';
    rmiInputOnlyKeys[0] = 'PurchaseReqList_INSTID_attribKey';
    rmiInputOnlyKeyTypes[0] = 'TEXT';
    rmiInputOnlyKeys[1] = '_old.PurchaseReqList.INSTID';
    rmiInputOnlyKeyTypes[1] = 'TEXT';
    rmiInputOnlyKeys[2] = 'motivo_rejeicao';
    rmiInputOnlyKeyTypes[2] = 'TEXT';
    rmiInputOnlyKeys[3] = 'ErrorLogs';
    rmiInputOnlyKeyTypes[3] = 'LIST';
    rmiInputOnlyKeys[4] = 'PurchaseReqList_USER_ID_attribKey';
    rmiInputOnlyKeyTypes[4] = 'TEXT';
    rmiInputOnlyKeys[5] = '_old.PurchaseReqList.USER_ID';
    rmiInputOnlyKeyTypes[5] = 'TEXT';
    rmiInputOnlyKeys[6] = 'PurchaseReqList_WI_ID_attribKey';
    rmiInputOnlyKeyTypes[6] = 'TEXT';
    rmiInputOnlyKeys[7] = '_old.PurchaseReqList.WI_ID';
    rmiInputOnlyKeyTypes[7] = 'TEXT';
    rmiInputOnlyKeys[8] = 'PurchaseReqList_TASK_OBJ_attribKey';
    rmiInputOnlyKeyTypes[8] = 'TEXT';
    rmiInputOnlyKeys[9] = '_old.PurchaseReqList.TASK_OBJ';
    rmiInputOnlyKeyTypes[9] = 'TEXT';
    rmiInputOnlyKeys[10] = 'PurchaseReqList_MANDT_attribKey';
    rmiInputOnlyKeyTypes[10] = 'TEXT';
    rmiInputOnlyKeys[11] = '_old.PurchaseReqList.MANDT';
    rmiInputOnlyKeyTypes[11] = 'TEXT';
    rmiInputOnlyKeys[12] = 'PurchaseReqList_WI_TYPE_attribKey';
    rmiInputOnlyKeyTypes[12] = 'TEXT';
    rmiInputOnlyKeys[13] = '_old.PurchaseReqList.WI_TYPE';
    rmiInputOnlyKeyTypes[13] = 'TEXT';
    rmiInputOnlyKeys[14] = 'PurchaseReqList_WI_CD_attribKey';
    rmiInputOnlyKeyTypes[14] = 'DATETIME';
    rmiInputOnlyKeys[15] = '_old.PurchaseReqList.WI_CD';
    rmiInputOnlyKeyTypes[15] = 'DATETIME';
    rmiInputOnlyKeys[16] = 'PurchaseReqList_WI_TEXT_attribKey';
    rmiInputOnlyKeyTypes[16] = 'TEXT';
    rmiInputOnlyKeys[17] = '_old.PurchaseReqList.WI_TEXT';
    rmiInputOnlyKeyTypes[17] = 'TEXT';
    rmiInputOnlyKeys[18] = 'PurchaseReqList_CATID_attribKey';
    rmiInputOnlyKeyTypes[18] = 'TEXT';
    rmiInputOnlyKeys[19] = '_old.PurchaseReqList.CATID';
    rmiInputOnlyKeyTypes[19] = 'TEXT';
    rmiInputOnlyKeys[20] = 'PurchaseReqList_TYPEID_attribKey';
    rmiInputOnlyKeyTypes[20] = 'TEXT';
    rmiInputOnlyKeys[21] = '_old.PurchaseReqList.TYPEID';
    rmiInputOnlyKeyTypes[21] = 'TEXT';
    rmiInputOnlyKeys[22] = 'PurchaseReqList_TOP_WI_ID_attribKey';
    rmiInputOnlyKeyTypes[22] = 'TEXT';
    rmiInputOnlyKeys[23] = '_old.PurchaseReqList.TOP_WI_ID';
    rmiInputOnlyKeyTypes[23] = 'TEXT';
    rmiInputOnlyKeys[24] = 'PurchaseReqList_RLWRT_attribKey';
    rmiInputOnlyKeyTypes[24] = 'NUMBER';
    rmiInputOnlyKeys[25] = '_old.PurchaseReqList.RLWRT';
    rmiInputOnlyKeyTypes[25] = 'NUMBER';
    rmiInputOnlyKeys[26] = 'PurchaseReqList_Requisitante_attribKey';
    rmiInputOnlyKeyTypes[26] = 'TEXT';
    rmiInputOnlyKeys[27] = '_old.PurchaseReqList.Requisitante';
    rmiInputOnlyKeyTypes[27] = 'TEXT';
    rmiInputOnlyKeys[28] = 'PurchaseReqList_Data_criacao_attribKey';
    rmiInputOnlyKeyTypes[28] = 'DATETIME';
    rmiInputOnlyKeys[29] = '_old.PurchaseReqList.Data_criacao';
    rmiInputOnlyKeyTypes[29] = 'DATETIME';
    rmiInputOnlyKeys[30] = 'PurchaseReqList_TEXT_HEADER_attribKey';
    rmiInputOnlyKeyTypes[30] = 'TEXT';
    rmiInputOnlyKeys[31] = '_old.PurchaseReqList.TEXT_HEADER';
    rmiInputOnlyKeyTypes[31] = 'TEXT';
    rmiInputOnlyKeys[32] = 'PurchaseReqList_TYPE_attribKey';
    rmiInputOnlyKeyTypes[32] = 'TEXT';
    rmiInputOnlyKeys[33] = '_old.PurchaseReqList.TYPE';
    rmiInputOnlyKeyTypes[33] = 'TEXT';
    rmiInputOnlyKeys[34] = 'PurchaseReqList_DATE_START_attribKey';
    rmiInputOnlyKeyTypes[34] = 'DATETIME';
    rmiInputOnlyKeys[35] = '_old.PurchaseReqList.DATE_START';
    rmiInputOnlyKeyTypes[35] = 'DATETIME';
    rmiInputOnlyKeys[36] = 'PurchaseReqList_DATE_END_attribKey';
    rmiInputOnlyKeyTypes[36] = 'DATETIME';
    rmiInputOnlyKeys[37] = '_old.PurchaseReqList.DATE_END';
    rmiInputOnlyKeyTypes[37] = 'DATETIME';
    var workflowMessageToSend = getMessageValueCollectionForOnlineRequest('Motivo', 'Rejeitar', rmiKeys, rmiKeyTypes);
    var inputOnlyWorkflowMessageToSend = getMessageValueCollectionForOnlineRequest('Motivo', 'Rejeitar', rmiInputOnlyKeys, rmiInputOnlyKeyTypes);
    if (validateScreen('Motivo', getCurrentMessageValueCollection(), rmiKeys) && 
        saveScreens(true)) {
        doOnlineRequest('Motivo', 'Rejeitar', 60, 0, '', null, workflowMessageToSend, inputOnlyWorkflowMessageToSend.serializeToString());
    }
    customAfterMenuItemClick('Motivo', 'Rejeitar');
}
function menuItemCallbackMotivoCancel() {
    if (!customBeforeMenuItemClick('Motivo', 'Cancel')) {
        return;
    }
    doCancelAction();
    customAfterMenuItemClick('Motivo', 'Cancel');
}


function menuItemCallbackSucessoOK() {
    if (!customBeforeMenuItemClick('Sucesso', 'OK')) {
        return;
    }
    navigateForward('Requisi__es');
    customAfterMenuItemClick('Sucesso', 'OK');
}
function menuItemCallbackSucessoCancel() {
    if (!customBeforeMenuItemClick('Sucesso', 'Cancel')) {
        return;
    }
    doCancelAction();
    customAfterMenuItemClick('Sucesso', 'Cancel');
}

function doAddRowAction() {
    var mvc = getCurrentMessageValueCollection();
    var listview = getListviewMessageValue();
    if (listview) {
        var childMVC = new MessageValueCollection();
        var key = guid();
        childMVC.setKey(key);
        childMVC.setState("new");
        childMVC.setParent(listview.getKey());
        childMVC.setParentValue(listview);
        listview.getValue().push(childMVC);
        console.log(workflowMessage.serializeToString());
        if (validateScreen(getCurrentScreen(), mvc)) {
            listViewValuesKey.pop();
            listViewValuesKey.push(childMVC.getKey());
            doListviewAddRowAction();
            console.log(workflowMessage.serializeToString());
        }
    }
}

function doCreateKeyCollectionAction(addScreen) {
    var mvc = getCurrentMessageValueCollection();
    var relationKey = getListViewKey(getCurrentScreen());
    var mv = mvc.getData(relationKey);
    var childMVC = new MessageValueCollection();
    var key = guid();
    childMVC.setKey(key);
    childMVC.setState("new");
    childMVC.setParent(mv.getKey());
    childMVC.setParentValue(mv);
    mv.getValue().push(childMVC);
    setDefaultValues(addScreen);
    // collect default values from the addScreen
    updateMessageValueCollectionFromUI(childMVC, addScreen);
    navigateForward(addScreen, key);
}

function doListviewAddRowAction(listKey) {
    var mvc = getCurrentMessageValueCollection(listKey);
    if (mvc.getState() === "new") {
        // this action is triggered after AddRow action
        if (validateScreen(getCurrentScreen(), mvc)) {
            mvc.setState("add");
            doSaveAction(false);
        }
    }
}

function doListviewUpdateRowAction(listKey) {
    var mvc = getCurrentMessageValueCollection(listKey);
    if (validateScreen(getCurrentScreen(), mvc)) {
        if (mvc.getState() !== "add") {
            mvc.setState("update");            
        }
        doSaveAction(false);
    }
}

function doListviewDeleteRowAction(listKey) {
    var mvc = getCurrentMessageValueCollection(listKey);
    if (validateScreen(getCurrentScreen(), mvc)) {
        if (mvc.getState() !== "add") {
            mvc.setState("delete");            
            doSaveAction(false);
        }
        else {
            var valuesArray = mvc.getParentValue().getValue();
            for (var i = 0; i < valuesArray.length; i++) {
                if (valuesArray[i] == mvc) {
                    valuesArray.splice(i, 1);
                }
            }
            navigateBack(true);
            updateUIFromMessageValueCollection(getCurrentScreen(), getCurrentMessageValueCollection());
        }        
    }
}

function doSaveActionWithoutReturn() {
   doSaveAction();
   return;
}

function doSaveAction(needValidation) {
    if (!getPreviousScreen()) {
        if(saveScreen(getCurrentMessageValueCollection(), getCurrentScreen(), needValidation)) {
            doSubmitWorkflow(getCurrentScreen(), "Save", '', '');
            return false;
        }
        return true;
    }
    if(saveScreen(getCurrentMessageValueCollection(), getCurrentScreen(), needValidation)) {
        navigateBack(false, false);
        updateUIFromMessageValueCollection(getCurrentScreen(), getCurrentMessageValueCollection());
        return true;
    }
    return false;
}

function doCancelAction() {
    if (!getPreviousScreen()) {
        closeWorkflow();
        return;
    }
    
    var mvc = getCurrentMessageValueCollection();
    navigateBack(true);
    var mvc1 = getCurrentMessageValueCollection();
    
    //if we are moving onto a listview screen we should delete any newly added rows
    if (mvc != mvc1) {
        //find the items of the listview and if any of them are marked as new, delete them.
        var messValues = mvc1.getValues();
        for (var i = 0; i < messValues.length; i++) {
            if (messValues[i].getType() === "LIST") {
                var listViewValuesArray = messValues[i].getValue()
                for (var j = 0; j < listViewValuesArray.length; j++) {
                    if (listViewValuesArray[j].getState() === "new") {
                        listViewValuesArray.splice(j, 1);
                        j--;
                    }
                }
            }        
        }
        updateUIFromMessageValueCollection(getCurrentScreen(), getCurrentMessageValueCollection());
    }
    else if (mvc.getState() === "update") {
        mvc.setState("");
    }
}

function customNavigationEntry() {
    this.condition;
    this.screen;
}
function customNavigationEntry( a_condition, a_screen ) {
    this.condition = a_condition;
    this.screen = a_screen;
}

/**
 * For the specific pair - screen named 'currentScreenKey' and the action 'actionName', return
 * the list of custom navigation condition-names and their destination screens.
 */
function getCustomNavigations( currentScreenKey, actionName )  {
    var customNavigations = new Array();
    return customNavigations;
}
