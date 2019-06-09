export interface IState {
    editingTask: ITaskForm;
    task: any;
    history: any;
}

export interface ITaskForm extends ITask {
    validation: IValidation;
}

export type IValidation = Record<keyof ITask, {
    passed: boolean;
    valid: boolean;
}>;

export interface ITask {
    functionalStep: IFunctional;
    variableStep: IVariableStep;
    managementStep: IManager[];
    derivativeStep: IDerivative;
    methodStep: IMethod;
}

export enum TaskStep {
    functionalStep,
    variableStep,
    managementStep,
    derivativeStep,
    methodStep,
}

export interface IFunctional {
    functional: string;
    t0: number;
    T: number;
    constants: {key: string, value: number}[],
    hasIntegralPart: boolean;
}

export interface IVariableStep {
    /** инфа о фазовых переменых и все что с ней связанно */
    vars: IVariable[];
    /** производная интегральной части по управлению.
     *  внешний массив это одна из интегральных частей конкретной f,
     *  внутренний массив это конкретное управление для этой f.
     *  Нужно только если мы решаем задачу ИДУ (задачу с интегро дифференциальной связью)!!!
     */
    dgdu?: string[][];
    /** производная интегральной части по фазовой переменной.
     *  внешний массив это одна из интегральных частей конкретной f,
     *  внутренний массив это конкретная фазовая переменная для этой f.
     *  Нужно только если мы решаем задачу ИДУ (задачу с интегро дифференциальной связью)!!!
     */
    dgdx?: string[][];
}

export interface IVariable {
    /** производная фазовой переменной по времени */
    f: string;
    /** сопряженная переменная */
    p: string;
    /** начальное значение фазовой переменной */
    xt0: number;
    /** конечное значение сопраженной */
    pT: number;
    /** опциональная интегральная часть функции f.
     *  Нужно только если мы решаем задачу ИДУ (задачу с интегро дифференциальной связью)!!!
     */
    g?: string;
}

export const getEmptyVariable = (): IVariable => ({
    f: '',
    p: '',
    xt0: 0,
    pT: 1,
    g: '',
});

export interface IManager {
    /** функция управления */
    u: string;
    /** массив значений параметров управления.
     *  внешний массив это конкретный интервал времени,
     *  а внутренний это значения параметров на этом интервале
     */
    v: number[][];
    /** время точек переключения */
    tk: number[];
    /** производная управления по одному из ее параметров */
    dudv: string[];
}

export const getEmptyManager = (): IManager => ({
    u: '',
    v: [[0]],
    tk: [],
    dudv: ['']
});

export interface IDerivative {
    /** производная f по фазовой переменной.
     *  внешний массив - это функции f,
     *  внутренний это производная конкретной фазовой переменной x по этой f
     */
    dfdx: string[][];
    /** производная f по управлению.
     *  внешний массив - это функции f,
     *  внутренний это производная конкретного управления u по этой f
     *  (в первой версии приложения будет только одно управление!!)
     */
    dfdu: string[][];
}

export interface IMethod {
    /** название метода */
    name: 'Newton' | 'Grad';
    /** численная или аналитическая реализация этого метода */
    type: 'digit' | 'anal';
    /** шаг интегрирования */
    step: number;
    /** частота дискретизация для кеширования результатов */
    descr: number;
}

export const initialState: IState = {
    editingTask: {
        functionalStep: {
            functional: '',
            t0: 0,
            T: 1,
            constants: [],
            hasIntegralPart: false

        },
        variableStep: {
            vars: [getEmptyVariable()],
            dgdu: [],
            dgdx: []

        },
        managementStep: [getEmptyManager()],
        derivativeStep: {
            dfdu: [['']],
            dfdx: [['']]
        },
        methodStep: {
            name: 'Grad',
            type: 'digit',
            step: 1e-6,
            descr: 40
        },
        validation: {
            functionalStep: {
                passed: false,
                valid: false
            },
            variableStep: {
                passed: false,
                valid: false
            },
            managementStep: {
                passed: false,
                valid: false
            },
            derivativeStep: {
                passed: false,
                valid: false
            },
            methodStep: {
                passed: false,
                valid: false
            },
        }
    },
    task: null,
    history: null,
};