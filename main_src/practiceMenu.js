let menu = new Ext.menu.Menu({
    items: [{
        xtype: 'menuitem',
        text: '选择框',
        menu: new Ext.menu.Menu({
            items: [{
                xtype: 'menucheckitem',
                text: 'check1',
                checkHandler: function () {
                    Ext.Msg.alert('checked', this.text)
                }
            },
            {
                xtype: 'menucheckitem',
                text: 'check2',
                checkHandler: function () {
                    Ext.Msg.alert('checked', this.text)
                }
            }]
        })
    }, {
        xtype: 'menuitem',
        text: '日期',
        menu: [{
            xtype: 'datepicker',
            handler: (datepicker, date) => { Ext.Msg.alert('选中', date.format('Y年m月d日')) }
        }]
    },
    {
        xtype: 'menuitem',
        text: '颜色',
        menu: [{
            xtype: 'colorpalette',
            handler: (palette, color) => { Ext.Msg.alert('选中', color) }
        }]
    },
    {
        xtype: 'menuitem',
        text: 'util获取',
        menu: [{
            xtype: 'button',
            text: 'Ext.get',
            handler: () => { console.log(Ext.get('toolbar')) }
        }, {
            xtype: 'button',
            text: 'Ext.getCmp',
            handler: () => { console.log(Ext.getCmp('toolbar')) }
        }, {
            xtype: 'button',
            text: 'Ext.getDom',
            handler: () => { console.log(Ext.getDom('toolbar')) }
        }, {
            xtype: 'button',
            text: 'Ext.getBody',
            handler: () => { console.log(Ext.getBody('toolbar')) }
        }, {
            xtype: 'button',
            text: 'Ext.getDoc',
            handler: () => { console.log(Ext.getDoc('toolbar')) }
        }]
    }, {
        xtype: 'menuitem',
        text: '查询改变',
        menu: [{
            xtype: 'button',
            text: 'CSS查询',
            handler: () => {
                Ext.query('.x-btn-mc').forEach((dom) => {
                    Ext.getDom(dom).style = 'background:red !important'
                })
            }
        }, {
            xtype: 'button',
            text: 'XPath查询',
            handler: () => {
                Ext.query('html/body/h1').forEach((dom) => {
                    Ext.getDom(dom).style = 'color:red !important;text-align:center;font-size:50px'
                })
            }
        }]
    },
    {
        xtype: 'menuitem',
        text: 'Ext工具',
        menu: [{
            xtype: 'button',
            text: 'code and apply',
            handler: () => {
                let apply = new Object()
                console.log(apply)
                let code = Ext.decode("{'name':'jerryLi'}")
                console.log(`encode：${Ext.encode(code)}`)
                Ext.applyIf(apply, Ext.decode("{'name':'jerryLi'}"))
                Ext.Msg.alert('apply', Ext.encode(apply))
            }
        }, {
            xtype: 'button',
            text: 'empty',
            handler: () => {
                Ext.Msg.alert('empty', Ext.isEmpty(''))
            }
        }, {
            xtype: 'button',
            text: 'each',
            handler: () => {
                Ext.each([1, 2, 3], function (e) {
                    console.log(e);
                });
            }
        }, {
            xtype: 'button',
            text: 'DelayTask',
            handler: () => {
                let task = new Ext.util.DelayedTask(function () {
                    console.log('hello world!' + new Date().getTime());
                });
                task.delay(3000);
            }
        }, {
            xtype: 'button',
            text: 'TaskRuner',
            handler: () => {
                let i = 3
                let task = {
                    run: function () {
                        Ext.fly('submit').update(i--)
                        if (i < 0) return false
                    },
                    interval: 1000
                }
                new Ext.util.TaskRunner().start(task)
            }
        }]
    }]
})
var practiceMenu = {
    xtype: 'splitbutton', text: '练习内容', menu
}
