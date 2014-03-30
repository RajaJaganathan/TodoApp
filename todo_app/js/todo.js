//@author Raja Jaganathan

//Todo Application

var Todo = Todo || (function () {

    return {

        addTask: function () {
            if ($("#txtTask").val().length <= 0)
                return;

            $("#task-template").tmpl({ task: $("#txtTask").val() }).appendTo(".todoList");
            $("#txtTask").val("");
        },

        init: function () {

            $("#addTaskButton").on("click", function () {
                console.log("addTaskButton clicked");
               Todo.addTask();
            });

            $(document).on("click", ".todoList li", function () {

                $(this).toggleClass("taskCompleted");

                var isTaskCompleted = $(this).hasClass("taskCompleted");

                if (isTaskCompleted)
                    $(this).find(".todoCheckbox").prop("checked", true);
                else
                    $(this).find(".todoCheckbox").prop("checked", false);
            });
        }
    };

})();

$(function () {
    Todo.init();
});
