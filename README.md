# Sidamo

Sidamo is a collection of pure webcomponents

## Demo
https://momoko8443.github.io/sidamojs/dist/

## Installation
```
npm install @momoko8443/sidamojs@0.0.1
"@momoko8443/sidamojs": "0.0.1"
```

## Usage
```
...
<script src="https://momoko8443.github.io/sidamojs/dist/sidamo.js"></script>
...
<body>
    ...
    <serai-navigator-arrow id="navigatorArrow"></serai-navigator-arrow>
    ...
</body>
...
<script>
    const navItems = [
        {
            title: 'aaaaaaaaaa'
        }, 
        {
            title: 'bbbbb'
        }, 
        {
            title: 'ccccccc'
        },
        {
            title: 'dddddddddddd'
        },
        {
            title: 'eeeeeeeeee'
        },
        {
            title: 'ffffffff'
        },
        {
            title: 'ggg'
        },
        {
            title: 'hhhhhh'
        }];
    const navDOM = document.getElementById('navigatorArrow');
    navDOM.source = navItems;
    navDOM.addEventListener('itemclick', (e) => {
        //alert(e.detail.title);
        console.log(e.detail.title);
    })
</script>
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

v0.0.1: new components: navigator bar

## Credits

Owner: Huibin Zheng (momoko8443)

## License
MIT