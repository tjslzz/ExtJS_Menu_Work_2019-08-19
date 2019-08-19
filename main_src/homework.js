let table = new Ext.Template([
    '<table><tr>',
    '<th> 姓名 </th> ',
    '<th> 年龄 </th> ',
    '</tr><tr>',
    '<td> i am {name} </td><td> {age} year old</td>',
    '<tr></table>'
])
let xtemplate = new Ext.XTemplate([
    "<tpl if=\"value == ''\">",
    '<button id=\"reply\" disabled>回复</button>',
    '</tpl>',
    "<tpl if=\"value != ''\">",
    '<button id=\"reply\">回复</button>',
    '</tpl>',
])
let edit = {
    text: '编辑',
    menu: {
        items: [{
            text: '重置',
            handler: () => { Ext.query('.x-html-editor-wrap iframe')[0].contentWindow.document.body.innerHTML = '' }
        }]
    }
}
let insert = {
    text: '插入',
    menu: {
        items: [{
            text: '表格',
            handler: () => { Ext.query('.x-html-editor-wrap iframe')[0].contentWindow.document.body.innerHTML = table.apply({ name: 'jerryLi', age: 22 }) }
        }]
    }
}
var homeworkMenu = new Ext.menu.Menu({
    items: [
        edit,
        { xtype: 'menuseparator' },
        insert
    ]
})
let success = new Ext.util.DelayedTask(function () {
    Ext.Msg.alert('Congratulation！', '回复成功！')
    table.append('inner', { name: 'jerryLi', age: 22 })
});
let timer = 0.0;
let progess = {
    run: function () {
        Ext.getCmp('progress').updateProgress(timer / 3.0)
        Ext.getCmp('progress').updateText('请稍后......')
        timer += 1.0
        if (timer > 3) {
            Ext.getCmp('progress').updateText('已回复！')
            return false
        }
    },
    interval: 1000
}
let submitCheck = {
    run: function () {
        xtemplate.overwrite('submit', { value: Ext.getCmp('form').getValue() })
        Ext.get('reply').on('click', function () {
            success.delay(3000);
            new Ext.util.TaskRunner().start(progess)
        })
    },
    interval: 1000
}
new Ext.util.TaskRunner().start(submitCheck)

var start = {
    text: '开始',
    menu: {
        items: [{
            text: '退出',
            handler: () => { window.close() }
        }]
    }
}
var template = new Ext.Template([
    '<div id=\"inner\">',
    '<h1>This is a blob</h1>',
    '<h1>I am {name}, {age} years old.</h1>',
    '<h1>I am a new coder of ITA bering class</h1>',
    '<h1>Super Cool</h1>',
    '</div>'
])