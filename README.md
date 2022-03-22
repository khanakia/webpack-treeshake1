
## Analyzing the webpack bundle size when the modules imported in multiple ways.

### When `devtool: false`

<table>
    <tr>
        <td>File</td>
        <td>Size (Bytes)</td>
        <td>Devtool</td>
    </tr>
    <tr>
        <td>sample1.js</td>
        <td>47</td>
        <td>false</td>
    </tr>
    <tr>
        <td>sample2.js</td>
        <td>47</td>
        <td>false</td>
    </tr>
    <tr>
        <td>sample3.js</td>
        <td>233</td>
        <td>false</td>
    </tr>
    <tr>
        <td>sample4.js</td>
        <td>47</td>
        <td>false</td>
    </tr>
</table>


### When `devtool: "eval-cheap-module-source-map"`

<table>
    <tr>
        <td>File</td>
        <td>Size (Bytes)</td>
        <td>Devtool</td>
    </tr>
    <tr>
        <td>sample1.js</td>
        <td>1000</td>
        <td>eval-cheap-module-source-map</td>
    </tr>
    <tr>
        <td>sample2.js</td>
        <td>1000</td>
        <td>eval-cheap-module-source-map</td>
    </tr>
    <tr>
        <td>sample3.js</td>
        <td>2000</td>
        <td>eval-cheap-module-source-map</td>
    </tr>
    <tr>
        <td>sample4.js</td>
        <td>1000</td>
        <td>eval-cheap-module-source-map</td>
    </tr>
</table>