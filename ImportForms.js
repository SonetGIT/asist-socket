const formsToInsert = [
  // Users forms
  require('./Forms/Users/searchUserForm.json'),
  require('./Forms/Users/createUserForm.json'),
  require('./Forms/Users/editUserForm.json'),
  require('./Forms/Users/userGridForm.json'),
  //Person forms
  require('./Forms/Person/personSearchForm.json'),
  require('./Forms/Person/personGridForm.json'),
  require('./Forms/Person/personCreatForm.json'),
  //PaymentsDepartment forms
  require('./Forms/PaymentsDepartment/closeMonthCreateParamForm.json'),
  require('./Forms/PaymentsDepartment/closeMonthSearchParamForm.json'),
  require('./Forms/PaymentsDepartment/closeMonthGridForm.json'),
  require('./Forms/PaymentsDepartment/closeMonthShowParamForm.json'),
  require('./Forms/PaymentsDepartment/closeMonthShowGridForm.json'),
  require('./Forms/PaymentsDepartment/closeMonthGetListSearchForm.json'),
  require('./Forms/PaymentsDepartment/closeMonthGetListGridForm.json'),
  require('./Forms/PaymentsDepartment/OpenBankAccountForms/openBankAccountGetListGridForm.json'),
  require('./Forms/PaymentsDepartment/OpenBankAccountForms/openBankAccountGetListSearchForm.json'),
  require('./Forms/PaymentsDepartment/OpenBankAccountForms/openBankAccountPreviewGridForm.json'),
  require('./Forms/PaymentsDepartment/OpenBankAccountForms/openBankAccountPreviewSearchForm.json'),
  require('./Forms/PaymentsDepartment/OpenBankAccountForms/openBankAccountRegisterDetailForm.json'),
  require('./Forms/PaymentsDepartment/OpenBankAccountForms/openBankAccountRegisterGridForm.json'),
  require('./Forms/PaymentsDepartment/OpenBankAccountForms/openBankAccDistrAppDetailForm.json'),
  require('./Forms/PaymentsDepartment/OpenBankAccountForms/openBankAccDistrAppGridForm.json'),
  require('./Forms/PaymentsDepartment/UploadBankAccountForms/uploadGetListGridForm.json'),
  require('./Forms/PaymentsDepartment/UploadBankAccountForms/uploadGetListSearchForm.json'),
  require('./Forms/PaymentsDepartment/UploadBankAccountForms/uploadDistrDetailForm.json'),
  require('./Forms/PaymentsDepartment/UploadBankAccountForms/uploadDistrDetailGridForm.json'),
  require('./Forms/PaymentsDepartment/UploadBankAccountForms/uploadBankAccountFileForm.json'),
  require('./Forms/PaymentsDepartment/RegistersForPaymentForms/registersForPaymentGetListSearchForm.json'),
  require('./Forms/PaymentsDepartment/RegistersForPaymentForms/registersForPaymentGetListGridForm.json'),
  require('./Forms/PaymentsDepartment/RegistersForPaymentForms/registersForPaymentDistrSearchForm.json'),
  require('./Forms/PaymentsDepartment/RegistersForPaymentForms/registersForPaymentDistrGridForm.json'),
  require('./Forms/PaymentsDepartment/RegistersForPaymentForms/registersForPaymentDistrDetailForm.json'),
  require('./Forms/PaymentsDepartment/RegistersForPaymentForms/registersForPaymentDistrDetailGridForm.json'),
  require('./Forms/PaymentsDepartment/RegistersForPaymentForms/registersForPaymentNoDistrGridForm.json'),
  require('./Forms/PaymentsDepartment/RegistersForPaymentForms/registersForPaymentCreatDetailForm.json'),
  require('./Forms/PaymentsDepartment/RegistersForPaymentForms/registersForPayCreatPreviewDocListForm.json'),
  require('./Forms/PaymentsDepartment/RegistersForPaymentForms/registersForPaymentAssignDetailForm.json')

]
module.exports = formsToInsert
