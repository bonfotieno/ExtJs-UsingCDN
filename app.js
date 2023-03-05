Ext.onReady(function(){
    Ext.create('Ext.Panel',{
        height: 100,
        renderTO: "helloExt",  // the id of the element which this Extjs function will display
        width: 200,
        title: "Ext Using CDN",
        html:"Simple app created using extjs CDN"
    })
})