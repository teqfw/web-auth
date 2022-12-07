# Handler for authentication requests

Class `TeqFw_Web_Auth_Back_Mod_Server_Handler` implements `TeqFw_Web_Back_Api_Dispatcher_IHandler` interface and is used
as handler to authenticate frontends.

Frontend is a space in a web browser with a set of browser's resources (cookies, IDB, cache, etc.). Frontend has
universally unique identifier (UUID) and has own asymmetric cryptography key to encrypt/sign messages sent to backend. 
