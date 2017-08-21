/**
 * Created by mpande on 8/17/17.
 */

export interface Visualization {
  id: string;
  name: string;
  subtitle: string;
  type: string;
  created: string;
  lastUpdated: string;
  description: string;
  details: any;
  layers: any[];
}
