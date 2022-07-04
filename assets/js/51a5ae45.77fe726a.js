"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[6545],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||p[u]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5229:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Payment modules"},s=void 0,d={unversionedId:"modules/special/payment",id:"modules/special/payment",title:"Payment modules",description:"Typical payment process",source:"@site/docs/modules/special/payment.md",sourceDirName:"modules/special",slug:"/modules/special/payment",permalink:"/docs/docs/modules/special/payment",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/modules/special/payment.md",tags:[],version:"current",frontMatter:{title:"Payment modules"},sidebar:"myAutogeneratedSidebar",previous:{title:"Delivery modules",permalink:"/docs/docs/modules/special/delivery"},next:{title:"Templating",permalink:"/docs/docs/modules/templating"}},m={},p=[{value:"Typical payment process",id:"typical-payment-process",level:2},{value:"Standard templates",id:"standard-templates",level:2},{value:"Implementing a payment module",id:"implementing-a-payment-module",level:2},{value:"<code>isValidPayment()</code> method",id:"isvalidpayment-method",level:3},{value:"<code>pay()</code> method",id:"pay-method",level:3},{value:"<code>manageStockOnCreation()</code> method",id:"managestockoncreation-method",level:3},{value:"Processing of payment system callback",id:"processing-of-payment-system-callback",level:2},{value:"Define the callback route",id:"define-the-callback-route",level:3},{value:"Create a payment controller",id:"create-a-payment-controller",level:3},{value:"Notify the payment to your customer and the shop manager",id:"notify-the-payment-to-your-customer-and-the-shop-manager",level:3}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"typical-payment-process"},"Typical payment process"),(0,o.kt)("p",null,"Once the customer has put some products in his cart, logged-in (or created his account) and selected a delivery method, the payment  becomes possible. Here is a typical payment process :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The customer selects the Payment module"),(0,o.kt)("li",{parentName:"ol"},'The customer trigger the payment (by clicking a "Pay" button on the front office'),(0,o.kt)("li",{parentName:"ol"},"The pay() method of the selected payment module is called by the Thelia core"),(0,o.kt)("li",{parentName:"ol"},"The pay() method manages the payment process, which could consists in :",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Invoking a web service or a platform specific API."),(0,o.kt)("li",{parentName:"ul"},"Submitting a form that contains payment parameters to a payment gateway."),(0,o.kt)("li",{parentName:"ul"},"Nothing (like in Cheque or Bank Transfer)."),(0,o.kt)("li",{parentName:"ul"},"Other specific stuff."))),(0,o.kt)("li",{parentName:"ol"},'If the payment is successful, the customer is redirected to a "thank you" page.'),(0,o.kt)("li",{parentName:"ol"},'If the payment fails, the customer is redirected to a "oops, sorry" page.')),(0,o.kt)("h2",{id:"standard-templates"},"Standard templates"),(0,o.kt)("p",null,"In the standard front-office template, three template files provides a common and standard way to interact with the customer :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"order-placed.html"),", to tell the customer his payment is successful."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"order-failed.html"),", to tell the customer his payment failed, and offer a way to try again."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"order-payment-gateway.html"),", to provide a standard template to submit data to the payment gateway. This template file is not used by modules that do not send form-data to payment gateway.")),(0,o.kt)("p",null,"These templates allow an immediate module integration in a shop template, but it's always possible for a module to provide its own templates."),(0,o.kt)("h2",{id:"implementing-a-payment-module"},"Implementing a payment module"),(0,o.kt)("p",null,"A payment module is basically a classic module. The main class should at least extends the ",(0,o.kt)("inlineCode",{parentName:"p"},"Thelia\\Module\\PaymentModuleInterface")," interface and implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"pay")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"isValidPayment")," methods."),(0,o.kt)("p",null,"For an easier integration with standard templates, a payment module may extends the ",(0,o.kt)("inlineCode",{parentName:"p"},"Thelia\\Module\\AbstractPaymentModule")," class, which offers some convenient methods :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"generateGatewayFormResponse()")," to generate the form that redirects the customer the platform gateway, using ",(0,o.kt)("inlineCode",{parentName:"li"},"order-payment-gateway.html"),". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getPaymentSuccessPageUrl()"),", to get the URL of the standard successful payment page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getPaymentFailurePageUrl()"),", to get the URL of the standard failed payment page.")),(0,o.kt)("h3",{id:"isvalidpayment-method"},(0,o.kt)("inlineCode",{parentName:"h3"},"isValidPayment()")," method"),(0,o.kt)("p",null,"This method should return a ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),". If ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the payment module is displayed on the front office by the payment loop. If ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", the module is not displayed."),(0,o.kt)("p",null,"This is useful if the payment solution have some limitations and can't be used. For example, PayPal can't be used if there are more than 10 products in customer's cart and/or if total order amount is greater than 8000 \u20ac."),(0,o.kt)("p",null,"You may also use this method to restrict access to your module to some IP addresses the during test phase."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"/**\n*\n* This method is called by the Payment loop.\n*\n* If you return true, the payment method will be displayed\n* If you return false, the payment method will not be displayed\n*\n* @return boolean\n*/\npublic function isValidPayment()\n{\n    // At this point, the order does not exists yet in the database. We have to get\n    // item count from the customer cart.\n\n    /** @var Session $session */\n    $session = $this->getRequest()->getSession();\n\n    /** @var Cart $cart */\n    $cart = $session->getCart();\n\n    $cartContentCount = $cart->countCartItems();\n\n    // BaseModule::getCurrentOrderTotalAmount() is a convenient methods \n    // to get order total from the current customer cart.\n\n    $orderTotal = $this->getCurrentOrderTotalAmount();\n\n    return $cartContentCount <= 10 && $orderTotal < 8000;\n}\n")),(0,o.kt)("h3",{id:"pay-method"},(0,o.kt)("inlineCode",{parentName:"h3"},"pay()")," method"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"pay()")," method is the most useful method of a payment module: it performs the payment of the current order, accordingly to the payment system requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"submit a form that directs the customer to the payment gateway,"),(0,o.kt)("li",{parentName:"ul"},"invoke a web service, a specific API, etc. to perform the payment from inside the method, and redirects the user to the result (success / failure) ant the end of the process"),(0,o.kt)("li",{parentName:"ul"},"start a specific process, managed by a module controller"),(0,o.kt)("li",{parentName:"ul"},"whatever your requirements are :)")),(0,o.kt)("p",null,"The current order is passed as a parameter to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pay()")," method."),(0,o.kt)("p",null,"The method should return a ",(0,o.kt)("inlineCode",{parentName:"p"},"Thelia\\Core\\HttpFoundation\\Response")," object. Alternatively, depending on your specific needs, you can redirect the customer to another URL."),(0,o.kt)("p",null,"To use the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"order-payment-gateway.html")," template, just generate an array of (name, value) couples with the , and send it the template along with the payment gateway URL using the ",(0,o.kt)("inlineCode",{parentName:"p"},"generateGatewayFormResponse($order, $gateway_url, $form_data)")," method.\nThe form will be automatically submitted, and the customer will be directed to the payment gateway."),(0,o.kt)("p",null,"Example for the Payzen payment module :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Payment gateway invocation\n *\n * @param  Order $order processed order\n * @return Response the payment form\n */\nprotected function pay(Order $order)\n{\n    $payzen_params = $this->getPayzenParameters($order, 'SINGLE');\n\n    // Convert files into standard var => value array\n    $html_params = array();\n\n    /** @var PayzenField $field */\n    foreach($payzen_params as $name => $field)\n        $html_params[$name] = $field->getValue();\n\n    // Be sure to have a valid platform URL, otherwise give up\n    if (false === $platformUrl = PayzenConfigQuery::read('platform_url', false)) {\n        throw new \\InvalidArgumentException(Translator::getInstance()->trans(\"The platform URL is not defined, please check Payzen module configuration.\"));\n    }\n\n    // Generate the form\n    return $this->generateGatewayFormResponse($order, $platformUrl, $html_params);\n}\n")),(0,o.kt)("p",null,"If you have a specific API, call it with the required parameters, and depending on the result, redirect to the success or failure page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Payment gateway invocation\n *\n * @param  Order $order processed order\n * @return Response the payment form\n */\nprotected function pay(Order $order)\n{\n    $api = new SamplePaymentApi();\n\n    // Invoke API\n    $result = $api->performPayment($with_some_parameters);\n\n    if ($result == API::SUCCESS) {\n        // Redirect to the standard success page\n        Redirect::exec($this->getPaymentSuccessPageUrl());\n    } else {\n        // Redirect to the standard failure page\n        Redirect::exec($this->getPaymentFailurePageUrl());\n    }\n }\n")),(0,o.kt)("h3",{id:"managestockoncreation-method"},(0,o.kt)("inlineCode",{parentName:"h3"},"manageStockOnCreation()")," method"),(0,o.kt)("div",{class:"alert alert-warning"},(0,o.kt)("p",null,"This functionality is only available since version 2.1")),(0,o.kt)("p",null,"You can decide with this function if your payment module decrease stock when the order is created or when the order status change to paid."),(0,o.kt)("p",null,"Return true for decrementing stock on order creation.\nReturn false for decrementing stock when order status change to paid."),(0,o.kt)("p",null,"If you use ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractPaymentModule")," class, this method is already defined and return true. Override it if you change to change this behaviour."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/**\n* Decrement stock on order creation\n**/\npublic function manageStockOnCreation()\n{\n    return true;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/**\n* Decrement stock when status change to paid\n**/\npublic function manageStockOnCreation()\n{\n    return false;\n}\n")),(0,o.kt)("h2",{id:"processing-of-payment-system-callback"},"Processing of payment system callback"),(0,o.kt)("p",null,"Most of payment platforms offers a callback system, to notify your module of the payment result. The callback often consists in calling an URL on your server, the Return URL. "),(0,o.kt)("h3",{id:"define-the-callback-route"},"Define the callback route"),(0,o.kt)("p",null,"First, define a route in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Config/routing.xml")," file of your module. This will be the URL the payment system will call after your customer payment. Example for the Payzen module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<routes xmlns="http://symfony.com/schema/routing"\n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:schemaLocation="http://symfony.com/schema/routing http://symfony.com/schema/routing/routing-1.0.xsd">\n\n    <route id="payzen.payment.confirmation" path="payzen/callback" methods="post">\n        <default key="_controller">Payzen\\Controller\\PaymentController::processPayzenRequest</default>\n    </route>\n</routes>\n')),(0,o.kt)("p",null,"The callback URL will be ",(0,o.kt)("inlineCode",{parentName:"p"},"http://www.yourshop.com/payzen/callback"),"."),(0,o.kt)("h3",{id:"create-a-payment-controller"},"Create a payment controller"),(0,o.kt)("p",null,"The callback URL will invoke a method in your payment controller. This controller may extends the abstract ",(0,o.kt)("inlineCode",{parentName:"p"},"Thelia\\Modules\\BasePaymentModuleController")," class, which provides useful methods for payment confirmation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getLog()")," : returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Tlog")," instance to a module specific log file. The file name is ",(0,o.kt)("em",{parentName:"p"},"module_code"),".log, and is located in the log directory. For example, the Payzen module log file is ",(0,o.kt)("inlineCode",{parentName:"p"},"payzen.log"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"confirmPayment($order_id)")," : call this method to confirm the payment of the order with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"$order_id"),". The method updates the order status to PAID, and dispatch the required events.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"cancelPayment($order_id)")," : Some payment systems may notify a cancellation of an already paid order through the return URL. Call this method in this case, to cancel the payment of an already paid order with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"$order_id"),". The order status will be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"NOT_PAID"),", and the required events will be dispatched.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getOrder($order_id)")," : returns the Order object for order ID ",(0,o.kt)("inlineCode",{parentName:"p"},"$order_id"),", or log an error the order can't be found.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"redirectToSuccessPage($order_id)")," : redirects the customer to the standard successful payment page. Use it only if your controller is invoked in the customer request scope.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"redirectToFailurePage($order_id)")," :  redirects the customer to the standard failed payment page. Use it only if your controller is invoked in the customer request scope."))),(0,o.kt)("p",null,"Your controller should implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"getModuleCode()"),' method, which returns your module code, that is the name of the module main class. For example "Payzen" for the Payzen module.'),(0,o.kt)("p",null,"Your controller should perform all required check before calling ",(0,o.kt)("inlineCode",{parentName:"p"},"confirmPayment()"),", to be sure that the customer payment is valid. "),(0,o.kt)("p",null,"As an example, here is the processing of the Payzen system callback :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class PaymentController extends BasePaymentModuleController\n{\n    protected function getModuleCode()\n    {\n        return \"Payzen\";\n    }\n\n    /**\n     * Process a Payzen platform request\n     */\n    public function processPayzenRequest()\n    {\n        // The response code to the server\n        $gateway_response_code = 'ko';\n\n        $payzenResponse = new PayzenResponse(\n            $_POST,\n            PayzenConfigQuery::read('mode'),\n            PayzenConfigQuery::read('test_certificate'),\n            PayzenConfigQuery::read('production_certificate')\n        );\n\n        $request = $this->getRequest();\n        $order_id = intval($request->get('vads_order_id'));\n\n        $this->getLog()->addInfo($this->getTranslator()->trans(\"Payzen platform request received for order ID %id.\", array('%id' => $order_id)));\n")),(0,o.kt)("p",null,"We're using  ",(0,o.kt)("inlineCode",{parentName:"p"},"getLog()")," to log this method's feedback in the ",(0,o.kt)("inlineCode",{parentName:"p"},"payzen.log")," file, whatever the current Thelia log configuration is."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"        if (null !== $order = $this->getOrder($order_id)) {\n\n            // Check the authenticity of the request\n            if ($payzenResponse->isAuthentified()) {\n\n                // Check payment status\n\n                if ($payzenResponse->isAcceptedPayment()) {\n\n                    // Payment was accepted.\n\n                    if ($order->isPaid()) {\n                        $this->getLog()->addInfo($this->getTranslator()->trans(\"Order ID %id is already paid.\", array('%id' => $order_id)));\n\n                        $gateway_response_code = 'payment_ok_already_done';\n                    } else {\n                        $this->getLog()->addInfo($this->getTranslator()->trans(\"Order ID %id payment was successful.\", array('%id' => $order_id)));\n")),(0,o.kt)("p",null,"We're sure the order has been successfully paid. Let's call the ",(0,o.kt)("inlineCode",{parentName:"p"},"confirmPayment()")," method, to set its status to PAID."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"                        // Payment OK !\n                    $this->confirmPayment($order_id);\n\n                        $gateway_response_code = 'payment_ok';\n                    }\n                } else {\n                    if ($payzenResponse->isCancelledPayment()) {\n")),(0,o.kt)("p",null,"Here, the order payment has been canceled, for some reason. Let's call the ",(0,o.kt)("inlineCode",{parentName:"p"},"cancelPayment()")," method, to set its status back to NOT_PAID."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"                        // Payment was canceled.\n                        $this->cancelPayment($order_id);\n                    } else {\n\n                        // Payment was not accepted.\n\n                        $this->getLog()->addError($this->getTranslator()->trans(\"Order ID %id payment failed.\", array('%id' => $order_id)));\n\n                        if ($order->isPaid()) {\n                            $gateway_response_code = 'payment_ko_already_done';\n                        } else {\n                            $gateway_response_code = 'payment_ko';\n                        }\n                    }\n                }\n            } else {\n                $this->getLog()->addError($this->getTranslator()->trans(\"Response could not be authentified.\"));\n\n                $gateway_response_code = 'auth_fail';\n            }\n        } else {\n            $gateway_response_code = 'order_not_found';\n        }\n\n        $this->getLog()->info($this->getTranslator()->trans(\"Payzen platform request for order ID %id processing teminated.\", array('%id' => $order_id)));\n\n        return Response::create($payzenResponse->getOutputForGateway($gateway_response_code));\n    }\n}\n")),(0,o.kt)("h3",{id:"notify-the-payment-to-your-customer-and-the-shop-manager"},"Notify the payment to your customer and the shop manager"),(0,o.kt)("p",null,'When a payment is successful, you may want to notify your customer that its order is confirmed, by sending email when the order status becomes "PAID".'),(0,o.kt)("p",null,"To do so, the module will subscribe to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ORDER_UPDATE_STATUS")," Thelia event. It will send the confirmation email when the status of and order that was paid with the module becomes PAID."),(0,o.kt)("p",null,"To make a class (here ",(0,o.kt)("inlineCode",{parentName:"p"},"SendConfirmationEmail"),") an event listener, add the required declaration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<services>")," element of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Config\\config.xml")," configuration file :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<services>\n    <service id="send.payzen.mail" class="Payzen\\EventListener\\SendConfirmationEmail" scope="request">\n        \n        \x3c!-- We pass the Thelia parser and the Email service to our class --\x3e\n        <argument type="service" id="thelia.parser" />\n        <argument type="service" id="mailer"/>\n\n        \x3c!-- Tag our class as an event listener --\x3e\n        <tag name="kernel.event_subscriber"/>\n    </service>\n</services>\n')),(0,o.kt)("p",null,"We have then to create the ",(0,o.kt)("inlineCode",{parentName:"p"},"Payzen\\EventListener\\SendConfirmationEmail")," class, that will process events, generate the email body, and send the e-mail."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class SendConfirmationEmail extends BaseAction implements EventSubscriberInterface\n{\n    /**\n     * @var MailerFactory\n     */\n    protected $mailer;\n    /**\n     * @var ParserInterface\n     */\n    protected $parser;\n\n    public function __construct(ParserInterface $parser, MailerFactory $mailer)\n    {\n        $this->parser = $parser;\n        $this->mailer = $mailer;\n    }\n")),(0,o.kt)("p",null,"The constructor receives the Thelia parser, to build the mail text, and the Thelia mailing service, to send the mail to the customer and/or the shop manager."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"    /**\n     * Check if we are the payment module for the order, and if the order is paid,\n     * then send a confirmation email to the customer.\n     *\n     * @params OrderEvent $order\n     */\n    public function updateOrderStatus(OrderEvent $event)\n    {\n        $payzen = new Payzen();\n\n        if ($event->getOrder()->isPaid() && $payzen->isPaymentModuleFor($event->getOrder())) {\n")),(0,o.kt)("p",null,"Here, we're using the ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseModule::isPaymentModuleFor($orderId)")," method to check if the order we get in the event has been paid with our module. "),(0,o.kt)("p",null,'We can build and send our mail now. In the "example below, a message with code ',(0,o.kt)("inlineCode",{parentName:"p"},"Payzen::CONFIRMATION_MESSAGE_NAME")," has been added to the database during the module installation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"            $contact_email = ConfigQuery::read('store_email', false);\n\n            Tlog::getInstance()->debug(\"Sending confirmation email from store contact e-mail $contact_email\");\n\n            if ($contact_email) {\n                $message = MessageQuery::create()\n                    ->filterByName(Payzen::CONFIRMATION_MESSAGE_NAME)\n                    ->findOne();\n\n                if (false === $message) {\n                    throw new \\Exception(sprintf(\"Failed to load message '%s'.\", Payzen::CONFIRMATION_MESSAGE_NAME));\n                }\n\n                $order = $event->getOrder();\n                $customer = $order->getCustomer();\n\n                $this->parser->assign('order_id', $order->getId());\n                $this->parser->assign('order_ref', $order->getRef());\n\n                $message\n                    ->setLocale($order->getLang()->getLocale());\n\n                $instance = \\Swift_Message::newInstance()\n                    ->addTo($customer->getEmail(), $customer->getFirstname().\" \".$customer->getLastname())\n                    ->addFrom($contact_email, ConfigQuery::read('store_name'))\n                ;\n\n                // Build subject and body\n                $message->buildMessage($this->parser, $instance);\n\n                $this->getMailer()->send($instance);\n\n                Tlog::getInstance()->debug(\"Confirmation email sent to customer \".$customer->getEmail());\n            }\n        }\n        else {\n            Tlog::getInstance()->debug(\"No confirmation email sent (order not paid, or not the proper payment module.\");\n        }\n    }\n")),(0,o.kt)("p",null,"We have to explicitly subscribe to some events, by implementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"EventSubscriberInterface::getSubscribedEvents()")," method. This method returns an array, where the event is the key. The value is an array which contains the name of the method that should be invoked (here, updateOrderStatus), and the priority in the invocation chain, as a integer between 0 and 255."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'    public static function getSubscribedEvents()\n    {\n        return array(\n            TheliaEvents::ORDER_UPDATE_STATUS => array("updateOrderStatus", 128)\n        );\n    }\n}\n')))}u.isMDXComponent=!0}}]);