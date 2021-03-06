/**
 * MyBranch
 * @constructor
 * @param Scene - Reference to MyScene object
 */
class MyBranch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.slices = 4;
        this.initBuffers();
        this.brown = new CGFappearance(scene);
        this.brown.setAmbient(102/255, 51/255, 0/255, 1.0);
        this.brown.setDiffuse(102/255, 51/255, 0/255, 1.0);
        this.brown.setSpecular(102/255, 51/255, 0/255, 1.0);
        this.brown.setShininess(10.0);
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;
        //declaring bottom vertices
        for(var i=0, ang=0; i<this.slices; i++, ang+=alphaAng) {
            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang)); 
        }
        //declaring top vertices
        for(var i=0, ang=0; i<this.slices; i++, ang+=alphaAng) {
            this.vertices.push(Math.cos(ang), 1, -Math.sin(ang));
        }
        //declaring indices
        for(var i=0; i<this.slices; i++) {
            if(i==this.slices-1) {
                this.indices.push(i, 0, this.slices);
                this.indices.push(i, this.slices, this.slices*2-1);
            }
            else {
                this.indices.push(i, i+1, i+this.slices+1);
                this.indices.push(i, i+this.slices+1, i+this.slices);
            }
        }
        //declaring lower normals
        for(var i=0, ang=0; i<this.slices; i++, ang+=alphaAng) {
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
        }
        //declaring upper normals
        for(var i=0, ang=0; i<this.slices; i++, ang+=alphaAng) {
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
        }
        //declaring texture coordenates

        for(var i=0; i<this.slices;i++)
            this.texCoords.push(
                0,1,
                1,1,
                0,0,
                1,0
            );        

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    display() {
        this.brown.apply();
        super.display();

    }
}