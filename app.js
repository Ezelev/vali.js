const v = new Validator("#sample-form",    {
        requiredFields: ["name", "email", "phone"],
        errorsElement: "#errors-holder"
    }
);