<template>
    <div class="promo-code-wrapper">
        <div 
            v-if="!showInput"
            @click="showInput = !showInput"
            class="promo-code-button">
            <span>&#x2b;</span>
            Promo Code
        </div>
        <div v-else class="promo-code-input-parent">
            <md-field class="md-cont position-relative">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.219" height="14.222" viewBox="0 0 14.219 14.222"><defs></defs><path class="a" d="M17.612,13.67a.539.539,0,1,0,.526.526A.556.556,0,0,0,17.612,13.67Z" transform="translate(-13.769 -10.387)"/><path class="a" d="M23.325,13.217q-3.277-3.286-6.559-6.564a1.739,1.739,0,0,0-1.3-.535H11.836a2.334,2.334,0,0,0-2.347,2.36v3.547a1.886,1.886,0,0,0,.6,1.43L12.7,16.064,15.362,18.7c.574.569,1.426,1.43,1.452,1.461a.487.487,0,0,0,.7.061,2.608,2.608,0,0,0,.287-.265l5.533-5.542C23.833,13.913,23.833,13.73,23.325,13.217Zm-10-1.634a1.688,1.688,0,1,0-.022,0Z" transform="translate(-9.488 -6.118)"/></svg>
                </div>
                <label>Promo code</label>
                <md-input 
                    name="promo" 
                    class="form-md" 
                    id="promo" 
                    autocomplete="off"
                    v-model="promo"
                />
            </md-field>
        </div>
        <div 
            v-if="showInput"
            @click="showInput = !showInput"
            class="ml-3 apply">
            Apply
        </div>
    </div>
</template>

<script>
export default {
    name: 'PromoCode',
    data() {
        return {
            showInput: false,
            promo: '',
        }
    }
}
</script>


<style lang="scss" scoped>

    @import "src/assets/css/style";

    .promo-code-wrapper {
        margin-top: 25px;
        font-family: PoppinsRegular, sans-serif;
        display: flex;
        align-items: center;

        .promo-code-input-parent {
            width: 100%;
        }

        .promo-code-button {
            color: #4A4A4A;
            cursor: pointer;

            span {
                margin-right: 5px;
            }

            &:hover {
                color: #31569C
            }
        }

        .apply {
            cursor: pointer;

            &:hover {
                color: #31569C;
            }
        }
    }

    .md-cont  {
        &:after {
            background: #31569C !important;
            height: 1px;
        }
        label {
            margin-left: 20px;
        }
        svg {
            path {
                fill: #31569C;
            }
        }
    }

    .md-field .md-input {
        padding: 0 15px;
    }

</style>