<template>
    <transition name="modal">
        <div class="modal-mask" @click="$emit('close')">
            <div class="modal-wrapper">
                <div @click="a" class="modal-container">
                    <div class="modal-body d-flex justify-content-center align-items-center flex-column">
                        <div class="body">
                            <p class="del-title">Are you sure you want to remove ?</p>
                            <div class="buttons d-flex justify-content-between">
                                <SubmitButton title="Yes" className="del" class="yes" colors="#C90058" disabled="false"/>
                                <SubmitButton title="Cancel" @click.native="$emit('close')" class="cancel" disabled="false"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import SubmitButton from "./SubmitButton";
    export default {
        name: "DeleteModal",
        components: {SubmitButton},
        methods: {
            a(element) {
                element.stopPropagation();
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/css/style";

    .lay{
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 9997;
    }
    .del-title{
        color: $blue;
        font-size: 22px;
        font-family: MontSemiBold, sans-serif;
    }
    .modal-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
        z-index: 99999;
    }
    .yes, .cancel{
        padding: 10px 45px;
        font-size: 18px;
        width: 170px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
    }
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
        position: relative;
        z-index: 9999;
    }

    .modal-container {
        width: 700px;
        margin: 0px auto;
        padding: 35px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
        display: flex;
    }
    .body{
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
        padding: 0;
    }

    .modal-default-button {
        float: right;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

</style>
