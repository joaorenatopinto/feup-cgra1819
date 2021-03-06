/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        this.gui.add(this.scene, 'displayAxis').name("Display axis");

        this.gui.add(this.scene, 'dayTimeMode', this.scene.dayTimeModes).name('Day Time');

        this.gui.add(this.scene, 'bonfire').name("Bonfire");

        this.gui.add(this.scene, 'textures').name("Textures");

        return true;
    }
}