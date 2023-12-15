$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/cargo.feature");
formatter.feature({
  "name": "Gestión de Cargos",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Listar Cargos",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "el usuario está en la página de administración de cargos",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.CargoSteps.user_is_on_cargo_admin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario lista los cargos",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CargoSteps.user_lists_cargos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se deberían mostrar todos los cargos",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.CargoSteps.cargos_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Buscar Cargo por Código",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "el usuario está en la página de administración de cargos",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.CargoSteps.user_is_on_cargo_admin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario busca un cargo por código",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CargoSteps.user_searches_cargo_by_code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debería encontrar el cargo correspondiente",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.CargoSteps.cargo_should_be_found()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Agregar Nuevo Cargo",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "el usuario está en la página de administración de cargos",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.CargoSteps.user_is_on_cargo_admin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario agrega un nuevo cargo",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CargoSteps.user_adds_new_cargo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el nuevo cargo debería estar en la lista de cargos",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.CargoSteps.new_cargo_should_be_in_cargo_list()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Eliminar Cargo",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "el usuario está en la página de administración de cargos",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.CargoSteps.user_is_on_cargo_admin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario elimina un cargo",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CargoSteps.user_deletes_cargo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el cargo debería ser eliminado de la lista de cargos",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.CargoSteps.cargo_should_be_deleted_from_cargo_list()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Modificar Cargo",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "el usuario está en la página de administración de cargos",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.CargoSteps.user_is_on_cargo_admin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario modifica un cargo",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CargoSteps.user_modifies_cargo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el cargo debería reflejar los cambios en la lista de cargos",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.CargoSteps.cargo_should_reflect_changes_in_cargo_list()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/cliente.feature");
formatter.feature({
  "name": "Gestión de Clientes",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Listar clientes",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "el usuario está en la página de gestión de clientes",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.ClienteSteps.user_is_on_client_management_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario lista los clientes",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.ClienteSteps.user_lists_clients()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se deberían mostrar todos los clientes",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.ClienteSteps.clients_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Agregar nuevo cliente",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "el usuario está en la página de gestión de clientes",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.ClienteSteps.user_is_on_client_management_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario agrega un nuevo cliente con DNI \"{DNI}\", nombre \"{Nombre}\", apellido \"{Apellido}\", y teléfono \"{Telefono}\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.ClienteSteps.user_adds_new_client(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el nuevo cliente debería estar en la lista de clientes",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.ClienteSteps.new_client_should_be_in_client_list()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Buscar cliente por DNI",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "el usuario está en la página de gestión de clientes",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.ClienteSteps.user_is_on_client_management_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario busca un cliente por DNI \"{DNI}\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.ClienteSteps.user_searches_client_by_dni(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debería encontrar el cliente correspondiente",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.ClienteSteps.client_should_be_found()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Modificar cliente",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "el usuario está en la página de gestión de clientes",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.ClienteSteps.user_is_on_client_management_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario modifica el cliente con DNI \"{DNI}\" y actualiza el nombre a \"{NuevoNombre}\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.ClienteSteps.user_modifies_client(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el cliente debería reflejar los cambios en la lista de clientes",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.ClienteSteps.client_should_reflect_changes_in_client_list()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Eliminar cliente",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "el usuario está en la página de gestión de clientes",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.ClienteSteps.user_is_on_client_management_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario elimina el cliente con DNI \"{DNI}\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.ClienteSteps.user_deletes_client(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el cliente debería ser eliminado de la lista de clientes",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.ClienteSteps.client_should_be_deleted_from_client_list()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/conexion.feature");
formatter.feature({
  "name": "feature para probar la conexión a la base de datos",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verificar la conexión a la base de datos",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "se establece la conexión a la base de datos",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.ConexionSteps.seEstableceLaConexionALaBaseDeDatos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "se realiza una consulta simple",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.ConexionSteps.seRealizaUnaConsultaSimple()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la conexión a la base de datos es exitosa",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.ConexionSteps.laConexionALaBaseDeDatosEsExitosa()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/recovery.feature");
formatter.feature({
  "name": "feature to test password recovery functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check password recovery is successful with valid email",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on the password recovery page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.RecoverySteps.user_is_on_password_recovery_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters their registered email",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.RecoverySteps.user_enters_registered_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the recovery button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.RecoverySteps.clicks_on_recovery_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives a password reset email",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.RecoverySteps.user_receives_password_reset_email()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check password recovery fails with an invalid email",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on the password recovery page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.RecoverySteps.user_is_on_password_recovery_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters an invalid email",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.RecoverySteps.user_enters_invalid_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the recovery button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.RecoverySteps.clicks_on_recovery_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.RecoverySteps.user_sees_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/reserva.feature");
formatter.feature({
  "name": "Reservar una habitación de hotel",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Realizar una reserva exitosa",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "el usuario está en la página de reservas",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.ReservaSteps.elUsuarioEstaEnLaPaginaDeReservas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario selecciona una habitación individual con fecha de entrada \"2023-12-01\" y fecha de salida \"2023-12-05\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.ReservaSteps.elUsuarioSeleccionaUnaHabitacionIndividualConFechas(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "completa la información del huésped con nombre \"Juan Pérez\" y número de teléfono \"123456789\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.ReservaSteps.completaLaInformacionDelHuesped(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hace clic en el botón de reserva",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.ReservaSteps.haceClicEnElBotonDeReserva()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la reserva debería ser confirmada con un número de reserva único",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.ReservaSteps.laReservaDeberiaSerConfirmadaConNumeroUnico()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario debería recibir un correo electrónico de confirmación",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.ReservaSteps.elUsuarioDeberiaRecibirCorreoDeConfirmacion()"
});
formatter.result({
  "status": "passed"
});
});