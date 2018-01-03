import AbsComponentFactory from "./AbsComponentFactory";
import {abstractMethod} from "../../utils/AbstractMethod";

class AbsWidgetFactory extends AbsComponentFactory {
}

AbsWidgetFactory.prototype.createManipulator = abstractMethod;

export default AbsWidgetFactory;