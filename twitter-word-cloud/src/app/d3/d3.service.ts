import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import { ForceDirectedGraph } from './models/force-directed-graph';
import { Link } from './models/link';

@Injectable()
export class D3Service {
  constructor() {}

  /** A method to bind a pan and zoom behaviour to an svg element */
  applyZoomableBehaviour(): void {}

  /** A method to bind a draggable behaviour to an svg element */
  applyDraggableBehaviour(): void {}

  /** The interactable graph we will simulate in this article
   * This method does not interact with the document, purely physical calculations with d3
   */
  // tslint:disable-next-line: typedef
  getForceDirectedGraph(
    nodes: Node[],
    links: Link[],
    options: { width; height }
  ) {
    const graph = new ForceDirectedGraph(nodes, links, options);
    return graph;
  }
}
