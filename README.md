[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/sidamojs)
# Sidamo
Sidamo is a collection of pure webcomponents

elements list:
1. pure navigator bar
2. navigator bar with arrow
3. coming soon

## Demo
online demo:
https://momoko8443.github.io/sidamojs/dist/

## Development ENV Setup

```
npm install

npm run serve
```

## Installation
```
npm install sidamojs
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