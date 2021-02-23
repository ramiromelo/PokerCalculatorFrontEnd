import React from 'react';
import RangeButton from './RangeButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { pl1range1A,
   pl1range2A,
   pl1range3A,
   pl1range4A,
   pl1range5A,
   pl1range6A,
   pl1range7A,
   pl1range8A,
   pl1range9A,
   pl1range10A,
   pl1range11A,
   pl1range12A,
   pl1range13A,
   pl1range14A,
   pl1range15A,
   pl1range16A,
   pl1range17A,
   pl1range18A,
   pl1range19A,
   pl1range20A,
   pl1range21A,
   pl1range22A,
   pl1range23A,
   pl1range24A,
   pl1range25A,
   pl1range26A,
   pl1range27A,
   pl1range28A,
   pl1range29A,
   pl1range30A,
   pl1range31A,
   pl1range32A,
   pl1range33A,
   pl1range34A,
   pl1range35A,
   pl1range36A,
   pl1range37A,
   pl1range38A,
   pl1range39A,
   pl1range40A,
   pl1range41A,
   pl1range42A,
   pl1range43A,
   pl1range44A,
   pl1range45A,
   pl1range46A,
   pl1range47A,
   pl1range48A,
   pl1range49A,
   pl1range50A,
   pl1range51A,
   pl1range52A,
   pl1range53A,
   pl1range54A,
   pl1range55A,
   pl1range56A,
   pl1range57A,
   pl1range58A,
   pl1range59A,
   pl1range60A,
   pl1range61A,
   pl1range62A,
   pl1range63A,
   pl1range64A,
   pl1range65A,
   pl1range66A,
   pl1range67A,
   pl1range68A,
   pl1range69A,
   pl1range70A,
   pl1range71A,
   pl1range72A,
   pl1range73A,
   pl1range74A,
   pl1range75A,
   pl1range76A,
   pl1range77A,
   pl1range78A,
   pl1range79A,
   pl1range80A,
   pl1range81A,
   pl1range82A,
   pl1range83A,
   pl1range84A,
   pl1range85A,
   pl1range86A,
   pl1range87A,
   pl1range88A,
   pl1range89A,
   pl1range90A,
   pl1range91A,
   pl1range92A,
   pl1range93A,
   pl1range94A,
   pl1range95A,
   pl1range96A,
   pl1range97A,
   pl1range98A,
   pl1range99A,
   pl1range100A,
   pl1range101A,
   pl1range102A,
   pl1range103A,
   pl1range104A,
   pl1range105A,
   pl1range106A,
   pl1range107A,
   pl1range108A,
   pl1range109A,
   pl1range110A,
   pl1range111A,
   pl1range112A,
   pl1range113A,
   pl1range114A,
   pl1range115A,
   pl1range116A,
   pl1range117A,
   pl1range118A,
   pl1range119A,
   pl1range120A,
   pl1range121A,
   pl1range122A,
   pl1range123A,
   pl1range124A,
   pl1range125A,
   pl1range126A,
   pl1range127A,
   pl1range128A,
   pl1range129A,
   pl1range130A,
   pl1range131A,
   pl1range132A,
   pl1range133A,
   pl1range134A,
   pl1range135A,
   pl1range136A,
   pl1range137A,
   pl1range138A,
   pl1range139A,
   pl1range140A,
   pl1range141A,
   pl1range142A,
   pl1range143A,
   pl1range144A,
   pl1range145A,
   pl1range146A,
   pl1range147A,
   pl1range148A,
   pl1range149A,
   pl1range150A,
   pl1range151A,
   pl1range152A,
   pl1range153A,
   pl1range154A,
   pl1range155A,
   pl1range156A,
   pl1range157A,
   pl1range158A,
   pl1range159A,
   pl1range160A,
   pl1range161A,
   pl1range162A,
   pl1range163A,
   pl1range164A,
   pl1range165A,
   pl1range166A,
   pl1range167A,
   pl1range168A,
   pl1range169A,
   
   pl2range1A,
   pl2range2A,
   pl2range3A,
   pl2range4A,
   pl2range5A,
   pl2range6A,
   pl2range7A,
   pl2range8A,
   pl2range9A,
   pl2range10A,
   pl2range11A,
   pl2range12A,
   pl2range13A,
   pl2range14A,
   pl2range15A,
   pl2range16A,
   pl2range17A,
   pl2range18A,
   pl2range19A,
   pl2range20A,
   pl2range21A,
   pl2range22A,
   pl2range23A,
   pl2range24A,
   pl2range25A,
   pl2range26A,
   pl2range27A,
   pl2range28A,
   pl2range29A,
   pl2range30A,
   pl2range31A,
   pl2range32A,
   pl2range33A,
   pl2range34A,
   pl2range35A,
   pl2range36A,
   pl2range37A,
   pl2range38A,
   pl2range39A,
   pl2range40A,
   pl2range41A,
   pl2range42A,
   pl2range43A,
   pl2range44A,
   pl2range45A,
   pl2range46A,
   pl2range47A,
   pl2range48A,
   pl2range49A,
   pl2range50A,
   pl2range51A,
   pl2range52A,
   pl2range53A,
   pl2range54A,
   pl2range55A,
   pl2range56A,
   pl2range57A,
   pl2range58A,
   pl2range59A,
   pl2range60A,
   pl2range61A,
   pl2range62A,
   pl2range63A,
   pl2range64A,
   pl2range65A,
   pl2range66A,
   pl2range67A,
   pl2range68A,
   pl2range69A,
   pl2range70A,
   pl2range71A,
   pl2range72A,
   pl2range73A,
   pl2range74A,
   pl2range75A,
   pl2range76A,
   pl2range77A,
   pl2range78A,
   pl2range79A,
   pl2range80A,
   pl2range81A,
   pl2range82A,
   pl2range83A,
   pl2range84A,
   pl2range85A,
   pl2range86A,
   pl2range87A,
   pl2range88A,
   pl2range89A,
   pl2range90A,
   pl2range91A,
   pl2range92A,
   pl2range93A,
   pl2range94A,
   pl2range95A,
   pl2range96A,
   pl2range97A,
   pl2range98A,
   pl2range99A,
   pl2range100A,
   pl2range101A,
   pl2range102A,
   pl2range103A,
   pl2range104A,
   pl2range105A,
   pl2range106A,
   pl2range107A,
   pl2range108A,
   pl2range109A,
   pl2range110A,
   pl2range111A,
   pl2range112A,
   pl2range113A,
   pl2range114A,
   pl2range115A,
   pl2range116A,
   pl2range117A,
   pl2range118A,
   pl2range119A,
   pl2range120A,
   pl2range121A,
   pl2range122A,
   pl2range123A,
   pl2range124A,
   pl2range125A,
   pl2range126A,
   pl2range127A,
   pl2range128A,
   pl2range129A,
   pl2range130A,
   pl2range131A,
   pl2range132A,
   pl2range133A,
   pl2range134A,
   pl2range135A,
   pl2range136A,
   pl2range137A,
   pl2range138A,
   pl2range139A,
   pl2range140A,
   pl2range141A,
   pl2range142A,
   pl2range143A,
   pl2range144A,
   pl2range145A,
   pl2range146A,
   pl2range147A,
   pl2range148A,
   pl2range149A,
   pl2range150A,
   pl2range151A,
   pl2range152A,
   pl2range153A,
   pl2range154A,
   pl2range155A,
   pl2range156A,
   pl2range157A,
   pl2range158A,
   pl2range159A,
   pl2range160A,
   pl2range161A,
   pl2range162A,
   pl2range163A,
   pl2range164A,
   pl2range165A,
   pl2range166A,
   pl2range167A,
   pl2range168A,
   pl2range169A,

   pl3range1A,
   pl3range2A,
   pl3range3A,
   pl3range4A,
   pl3range5A,
   pl3range6A,
   pl3range7A,
   pl3range8A,
   pl3range9A,
   pl3range10A,
   pl3range11A,
   pl3range12A,
   pl3range13A,
   pl3range14A,
   pl3range15A,
   pl3range16A,
   pl3range17A,
   pl3range18A,
   pl3range19A,
   pl3range20A,
   pl3range21A,
   pl3range22A,
   pl3range23A,
   pl3range24A,
   pl3range25A,
   pl3range26A,
   pl3range27A,
   pl3range28A,
   pl3range29A,
   pl3range30A,
   pl3range31A,
   pl3range32A,
   pl3range33A,
   pl3range34A,
   pl3range35A,
   pl3range36A,
   pl3range37A,
   pl3range38A,
   pl3range39A,
   pl3range40A,
   pl3range41A,
   pl3range42A,
   pl3range43A,
   pl3range44A,
   pl3range45A,
   pl3range46A,
   pl3range47A,
   pl3range48A,
   pl3range49A,
   pl3range50A,
   pl3range51A,
   pl3range52A,
   pl3range53A,
   pl3range54A,
   pl3range55A,
   pl3range56A,
   pl3range57A,
   pl3range58A,
   pl3range59A,
   pl3range60A,
   pl3range61A,
   pl3range62A,
   pl3range63A,
   pl3range64A,
   pl3range65A,
   pl3range66A,
   pl3range67A,
   pl3range68A,
   pl3range69A,
   pl3range70A,
   pl3range71A,
   pl3range72A,
   pl3range73A,
   pl3range74A,
   pl3range75A,
   pl3range76A,
   pl3range77A,
   pl3range78A,
   pl3range79A,
   pl3range80A,
   pl3range81A,
   pl3range82A,
   pl3range83A,
   pl3range84A,
   pl3range85A,
   pl3range86A,
   pl3range87A,
   pl3range88A,
   pl3range89A,
   pl3range90A,
   pl3range91A,
   pl3range92A,
   pl3range93A,
   pl3range94A,
   pl3range95A,
   pl3range96A,
   pl3range97A,
   pl3range98A,
   pl3range99A,
   pl3range100A,
   pl3range101A,
   pl3range102A,
   pl3range103A,
   pl3range104A,
   pl3range105A,
   pl3range106A,
   pl3range107A,
   pl3range108A,
   pl3range109A,
   pl3range110A,
   pl3range111A,
   pl3range112A,
   pl3range113A,
   pl3range114A,
   pl3range115A,
   pl3range116A,
   pl3range117A,
   pl3range118A,
   pl3range119A,
   pl3range120A,
   pl3range121A,
   pl3range122A,
   pl3range123A,
   pl3range124A,
   pl3range125A,
   pl3range126A,
   pl3range127A,
   pl3range128A,
   pl3range129A,
   pl3range130A,
   pl3range131A,
   pl3range132A,
   pl3range133A,
   pl3range134A,
   pl3range135A,
   pl3range136A,
   pl3range137A,
   pl3range138A,
   pl3range139A,
   pl3range140A,
   pl3range141A,
   pl3range142A,
   pl3range143A,
   pl3range144A,
   pl3range145A,
   pl3range146A,
   pl3range147A,
   pl3range148A,
   pl3range149A,
   pl3range150A,
   pl3range151A,
   pl3range152A,
   pl3range153A,
   pl3range154A,
   pl3range155A,
   pl3range156A,
   pl3range157A,
   pl3range158A,
   pl3range159A,
   pl3range160A,
   pl3range161A,
   pl3range162A,
   pl3range163A,
   pl3range164A,
   pl3range165A,
   pl3range166A,
   pl3range167A,
   pl3range168A,
   pl3range169A,

   pl4range1A,
   pl4range2A,
   pl4range3A,
   pl4range4A,
   pl4range5A,
   pl4range6A,
   pl4range7A,
   pl4range8A,
   pl4range9A,
   pl4range10A,
   pl4range11A,
   pl4range12A,
   pl4range13A,
   pl4range14A,
   pl4range15A,
   pl4range16A,
   pl4range17A,
   pl4range18A,
   pl4range19A,
   pl4range20A,
   pl4range21A,
   pl4range22A,
   pl4range23A,
   pl4range24A,
   pl4range25A,
   pl4range26A,
   pl4range27A,
   pl4range28A,
   pl4range29A,
   pl4range30A,
   pl4range31A,
   pl4range32A,
   pl4range33A,
   pl4range34A,
   pl4range35A,
   pl4range36A,
   pl4range37A,
   pl4range38A,
   pl4range39A,
   pl4range40A,
   pl4range41A,
   pl4range42A,
   pl4range43A,
   pl4range44A,
   pl4range45A,
   pl4range46A,
   pl4range47A,
   pl4range48A,
   pl4range49A,
   pl4range50A,
   pl4range51A,
   pl4range52A,
   pl4range53A,
   pl4range54A,
   pl4range55A,
   pl4range56A,
   pl4range57A,
   pl4range58A,
   pl4range59A,
   pl4range60A,
   pl4range61A,
   pl4range62A,
   pl4range63A,
   pl4range64A,
   pl4range65A,
   pl4range66A,
   pl4range67A,
   pl4range68A,
   pl4range69A,
   pl4range70A,
   pl4range71A,
   pl4range72A,
   pl4range73A,
   pl4range74A,
   pl4range75A,
   pl4range76A,
   pl4range77A,
   pl4range78A,
   pl4range79A,
   pl4range80A,
   pl4range81A,
   pl4range82A,
   pl4range83A,
   pl4range84A,
   pl4range85A,
   pl4range86A,
   pl4range87A,
   pl4range88A,
   pl4range89A,
   pl4range90A,
   pl4range91A,
   pl4range92A,
   pl4range93A,
   pl4range94A,
   pl4range95A,
   pl4range96A,
   pl4range97A,
   pl4range98A,
   pl4range99A,
   pl4range100A,
   pl4range101A,
   pl4range102A,
   pl4range103A,
   pl4range104A,
   pl4range105A,
   pl4range106A,
   pl4range107A,
   pl4range108A,
   pl4range109A,
   pl4range110A,
   pl4range111A,
   pl4range112A,
   pl4range113A,
   pl4range114A,
   pl4range115A,
   pl4range116A,
   pl4range117A,
   pl4range118A,
   pl4range119A,
   pl4range120A,
   pl4range121A,
   pl4range122A,
   pl4range123A,
   pl4range124A,
   pl4range125A,
   pl4range126A,
   pl4range127A,
   pl4range128A,
   pl4range129A,
   pl4range130A,
   pl4range131A,
   pl4range132A,
   pl4range133A,
   pl4range134A,
   pl4range135A,
   pl4range136A,
   pl4range137A,
   pl4range138A,
   pl4range139A,
   pl4range140A,
   pl4range141A,
   pl4range142A,
   pl4range143A,
   pl4range144A,
   pl4range145A,
   pl4range146A,
   pl4range147A,
   pl4range148A,
   pl4range149A,
   pl4range150A,
   pl4range151A,
   pl4range152A,
   pl4range153A,
   pl4range154A,
   pl4range155A,
   pl4range156A,
   pl4range157A,
   pl4range158A,
   pl4range159A,
   pl4range160A,
   pl4range161A,
   pl4range162A,
   pl4range163A,
   pl4range164A,
   pl4range165A,
   pl4range166A,
   pl4range167A,
   pl4range168A,
   pl4range169A,

   pl5range1A,
   pl5range2A,
   pl5range3A,
   pl5range4A,
   pl5range5A,
   pl5range6A,
   pl5range7A,
   pl5range8A,
   pl5range9A,
   pl5range10A,
   pl5range11A,
   pl5range12A,
   pl5range13A,
   pl5range14A,
   pl5range15A,
   pl5range16A,
   pl5range17A,
   pl5range18A,
   pl5range19A,
   pl5range20A,
   pl5range21A,
   pl5range22A,
   pl5range23A,
   pl5range24A,
   pl5range25A,
   pl5range26A,
   pl5range27A,
   pl5range28A,
   pl5range29A,
   pl5range30A,
   pl5range31A,
   pl5range32A,
   pl5range33A,
   pl5range34A,
   pl5range35A,
   pl5range36A,
   pl5range37A,
   pl5range38A,
   pl5range39A,
   pl5range40A,
   pl5range41A,
   pl5range42A,
   pl5range43A,
   pl5range44A,
   pl5range45A,
   pl5range46A,
   pl5range47A,
   pl5range48A,
   pl5range49A,
   pl5range50A,
   pl5range51A,
   pl5range52A,
   pl5range53A,
   pl5range54A,
   pl5range55A,
   pl5range56A,
   pl5range57A,
   pl5range58A,
   pl5range59A,
   pl5range60A,
   pl5range61A,
   pl5range62A,
   pl5range63A,
   pl5range64A,
   pl5range65A,
   pl5range66A,
   pl5range67A,
   pl5range68A,
   pl5range69A,
   pl5range70A,
   pl5range71A,
   pl5range72A,
   pl5range73A,
   pl5range74A,
   pl5range75A,
   pl5range76A,
   pl5range77A,
   pl5range78A,
   pl5range79A,
   pl5range80A,
   pl5range81A,
   pl5range82A,
   pl5range83A,
   pl5range84A,
   pl5range85A,
   pl5range86A,
   pl5range87A,
   pl5range88A,
   pl5range89A,
   pl5range90A,
   pl5range91A,
   pl5range92A,
   pl5range93A,
   pl5range94A,
   pl5range95A,
   pl5range96A,
   pl5range97A,
   pl5range98A,
   pl5range99A,
   pl5range100A,
   pl5range101A,
   pl5range102A,
   pl5range103A,
   pl5range104A,
   pl5range105A,
   pl5range106A,
   pl5range107A,
   pl5range108A,
   pl5range109A,
   pl5range110A,
   pl5range111A,
   pl5range112A,
   pl5range113A,
   pl5range114A,
   pl5range115A,
   pl5range116A,
   pl5range117A,
   pl5range118A,
   pl5range119A,
   pl5range120A,
   pl5range121A,
   pl5range122A,
   pl5range123A,
   pl5range124A,
   pl5range125A,
   pl5range126A,
   pl5range127A,
   pl5range128A,
   pl5range129A,
   pl5range130A,
   pl5range131A,
   pl5range132A,
   pl5range133A,
   pl5range134A,
   pl5range135A,
   pl5range136A,
   pl5range137A,
   pl5range138A,
   pl5range139A,
   pl5range140A,
   pl5range141A,
   pl5range142A,
   pl5range143A,
   pl5range144A,
   pl5range145A,
   pl5range146A,
   pl5range147A,
   pl5range148A,
   pl5range149A,
   pl5range150A,
   pl5range151A,
   pl5range152A,
   pl5range153A,
   pl5range154A,
   pl5range155A,
   pl5range156A,
   pl5range157A,
   pl5range158A,
   pl5range159A,
   pl5range160A,
   pl5range161A,
   pl5range162A,
   pl5range163A,
   pl5range164A,
   pl5range165A,
   pl5range166A,
   pl5range167A,
   pl5range168A,
   pl5range169A,

} from '../actions/rangesActions';

function RangeBoard() {

   const playerSelectedPanel = useSelector(state => state.playerSelected);
   const  dispatch = useDispatch();
   let range = 0;

   return ( 

      <div style={{
         // height: '30vh',
         // display: 'flex',
         color: 'white',
      }} className="container">
         <div nameClass="row">
            <div>PLAYER SELECTED: {playerSelectedPanel}</div>
            <table>
               <tbody>
                  <tr>
                     <td><div onClick={() => {
                        switch (playerSelectedPanel) {
                           case 1:
                              dispatch(pl1range1A());
                              break;
                           case 2:
                              dispatch(pl2range1A());
                              break;
                           case 3:
                              dispatch(pl3range1A());
                              break;
                           case 4:
                              dispatch(pl4range1A());
                              break;
                           case 5:
                              dispatch(pl5range1A());
                              break;
                           default:
                        }
                     }}><RangeButton selected={useSelector(state => state.ranges[playerSelectedPanel][1])} buttonName="AA" type="p" /></div></td>
                     <td><div onClick={() => {
                        switch (playerSelectedPanel) {
                           case 1:
                              dispatch(pl1range2A());
                              break;
                           case 2:
                              dispatch(pl2range2A());
                              break;
                           case 3:
                              dispatch(pl3range2A());
                              break;
                           case 4:
                              dispatch(pl4range2A());
                              break;
                           case 5:
                              dispatch(pl5range2A());
                              break;
                           default:
                        }
                     }}><RangeButton selected={useSelector(state => state.ranges[playerSelectedPanel][2])} buttonName="AK" type="s" /></div></td>
                     <td><RangeButton buttonName="AQ" type="s" /></td>
                     <td><RangeButton buttonName="AJ" type="s" /></td>
                     <td><RangeButton buttonName="AT" type="s" /></td>
                     <td><RangeButton buttonName="A9" type="s" /></td>
                     <td><RangeButton buttonName="A8" type="s" /></td>
                     <td><RangeButton buttonName="A7" type="s" /></td>
                     <td><RangeButton buttonName="A6" type="s" /></td>
                     <td><RangeButton buttonName="A5" type="s" /></td>
                     <td><RangeButton buttonName="A4" type="s" /></td>
                     <td><RangeButton buttonName="A3" type="s" /></td>
                     <td><RangeButton buttonName="A2" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="AK" type="o" /></td>
                     <td><RangeButton buttonName="KK" type="p" /></td>
                     <td><RangeButton buttonName="KQ" type="s" /></td>
                     <td><RangeButton buttonName="KJ" type="s" /></td>
                     <td><RangeButton buttonName="KT" type="s" /></td>
                     <td><RangeButton buttonName="K9" type="s" /></td>
                     <td><RangeButton buttonName="K8" type="s" /></td>
                     <td><RangeButton buttonName="K7" type="s" /></td>
                     <td><RangeButton buttonName="K6" type="s" /></td>
                     <td><RangeButton buttonName="K5" type="s" /></td>
                     <td><RangeButton buttonName="K4" type="s" /></td>
                     <td><RangeButton buttonName="K3" type="s" /></td>
                     <td><RangeButton buttonName="K2" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="AQ" type="o" /></td>
                     <td><RangeButton buttonName="KQ" type="o" /></td>
                     <td><RangeButton buttonName="QQ" type="p" /></td>
                     <td><RangeButton buttonName="QJ" type="s" /></td>
                     <td><RangeButton buttonName="QT" type="s" /></td>
                     <td><RangeButton buttonName="Q9" type="s" /></td>
                     <td><RangeButton buttonName="Q8" type="s" /></td>
                     <td><RangeButton buttonName="Q7" type="s" /></td>
                     <td><RangeButton buttonName="Q6" type="s" /></td>
                     <td><RangeButton buttonName="Q5" type="s" /></td>
                     <td><RangeButton buttonName="Q4" type="s" /></td>
                     <td><RangeButton buttonName="Q3" type="s" /></td>
                     <td><RangeButton buttonName="Q2" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="AJ" type="o" /></td>
                     <td><RangeButton buttonName="KJ" type="o" /></td>
                     <td><RangeButton buttonName="QJ" type="o" /></td>
                     <td><RangeButton buttonName="JJ" type="p" /></td>
                     <td><RangeButton buttonName="JT" type="s" /></td>
                     <td><RangeButton buttonName="J9" type="s" /></td>
                     <td><RangeButton buttonName="J8" type="s" /></td>
                     <td><RangeButton buttonName="J7" type="s" /></td>
                     <td><RangeButton buttonName="J6" type="s" /></td>
                     <td><RangeButton buttonName="J5" type="s" /></td>
                     <td><RangeButton buttonName="J4" type="s" /></td>
                     <td><RangeButton buttonName="J3" type="s" /></td>
                     <td><RangeButton buttonName="J2" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="AT" type="o" /></td>
                     <td><RangeButton buttonName="KT" type="o" /></td>
                     <td><RangeButton buttonName="QT" type="o" /></td>
                     <td><RangeButton buttonName="JT" type="o" /></td>
                     <td><RangeButton buttonName="TT" type="p" /></td>
                     <td><RangeButton buttonName="T9" type="s" /></td>
                     <td><RangeButton buttonName="T8" type="s" /></td>
                     <td><RangeButton buttonName="T7" type="s" /></td>
                     <td><RangeButton buttonName="T6" type="s" /></td>
                     <td><RangeButton buttonName="T5" type="s" /></td>
                     <td><RangeButton buttonName="T4" type="s" /></td>
                     <td><RangeButton buttonName="T3" type="s" /></td>
                     <td><RangeButton buttonName="T2" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="A9" type="o" /></td>
                     <td><RangeButton buttonName="K9" type="o" /></td>
                     <td><RangeButton buttonName="Q9" type="o" /></td>
                     <td><RangeButton buttonName="J9" type="o" /></td>
                     <td><RangeButton buttonName="T9" type="o" /></td>
                     <td><RangeButton buttonName="99" type="p" /></td>
                     <td><RangeButton buttonName="98" type="s" /></td>
                     <td><RangeButton buttonName="97" type="s" /></td>
                     <td><RangeButton buttonName="96" type="s" /></td>
                     <td><RangeButton buttonName="95" type="s" /></td>
                     <td><RangeButton buttonName="94" type="s" /></td>
                     <td><RangeButton buttonName="93" type="s" /></td>
                     <td><RangeButton buttonName="92" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="A8" type="o" /></td>
                     <td><RangeButton buttonName="K8" type="o" /></td>
                     <td><RangeButton buttonName="Q8" type="o" /></td>
                     <td><RangeButton buttonName="J8" type="o" /></td>
                     <td><RangeButton buttonName="T8" type="o" /></td>
                     <td><RangeButton buttonName="98" type="o" /></td>
                     <td><RangeButton buttonName="88" type="p" /></td>
                     <td><RangeButton buttonName="87" type="s" /></td>
                     <td><RangeButton buttonName="86" type="s" /></td>
                     <td><RangeButton buttonName="85" type="s" /></td>
                     <td><RangeButton buttonName="84" type="s" /></td>
                     <td><RangeButton buttonName="83" type="s" /></td>
                     <td><RangeButton buttonName="82" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="A7" type="o" /></td>
                     <td><RangeButton buttonName="K7" type="o" /></td>
                     <td><RangeButton buttonName="Q7" type="o" /></td>
                     <td><RangeButton buttonName="J7" type="o" /></td>
                     <td><RangeButton buttonName="T7" type="o" /></td>
                     <td><RangeButton buttonName="97" type="o" /></td>
                     <td><RangeButton buttonName="87" type="o" /></td>
                     <td><RangeButton buttonName="77" type="p" /></td>
                     <td><RangeButton buttonName="76" type="s" /></td>
                     <td><RangeButton buttonName="75" type="s" /></td>
                     <td><RangeButton buttonName="74" type="s" /></td>
                     <td><RangeButton buttonName="73" type="s" /></td>
                     <td><RangeButton buttonName="72" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="A6" type="o" /></td>
                     <td><RangeButton buttonName="K6" type="o" /></td>
                     <td><RangeButton buttonName="Q6" type="o" /></td>
                     <td><RangeButton buttonName="J6" type="o" /></td>
                     <td><RangeButton buttonName="T6" type="o" /></td>
                     <td><RangeButton buttonName="96" type="o" /></td>
                     <td><RangeButton buttonName="86" type="o" /></td>
                     <td><RangeButton buttonName="76" type="o" /></td>
                     <td><RangeButton buttonName="66" type="p" /></td>
                     <td><RangeButton buttonName="65" type="s" /></td>
                     <td><RangeButton buttonName="64" type="s" /></td>
                     <td><RangeButton buttonName="63" type="s" /></td>
                     <td><RangeButton buttonName="62" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="A5" type="o" /></td>
                     <td><RangeButton buttonName="K5" type="o" /></td>
                     <td><RangeButton buttonName="Q5" type="o" /></td>
                     <td><RangeButton buttonName="J5" type="o" /></td>
                     <td><RangeButton buttonName="T5" type="o" /></td>
                     <td><RangeButton buttonName="95" type="o" /></td>
                     <td><RangeButton buttonName="85" type="o" /></td>
                     <td><RangeButton buttonName="75" type="o" /></td>
                     <td><RangeButton buttonName="65" type="o" /></td>
                     <td><RangeButton buttonName="55" type="p" /></td>
                     <td><RangeButton buttonName="54" type="s" /></td>
                     <td><RangeButton buttonName="53" type="s" /></td>
                     <td><RangeButton buttonName="52" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="A4" type="o" /></td>
                     <td><RangeButton buttonName="K4" type="o" /></td>
                     <td><RangeButton buttonName="Q4" type="o" /></td>
                     <td><RangeButton buttonName="J4" type="o" /></td>
                     <td><RangeButton buttonName="T4" type="o" /></td>
                     <td><RangeButton buttonName="94" type="o" /></td>
                     <td><RangeButton buttonName="84" type="o" /></td>
                     <td><RangeButton buttonName="74" type="o" /></td>
                     <td><RangeButton buttonName="64" type="o" /></td>
                     <td><RangeButton buttonName="54" type="o" /></td>
                     <td><RangeButton buttonName="44" type="p" /></td>
                     <td><RangeButton buttonName="43" type="s" /></td>
                     <td><RangeButton buttonName="42" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="A3" type="o" /></td>
                     <td><RangeButton buttonName="K3" type="o" /></td>
                     <td><RangeButton buttonName="Q3" type="o" /></td>
                     <td><RangeButton buttonName="J3" type="o" /></td>
                     <td><RangeButton buttonName="T3" type="o" /></td>
                     <td><RangeButton buttonName="93" type="o" /></td>
                     <td><RangeButton buttonName="83" type="o" /></td>
                     <td><RangeButton buttonName="73" type="o" /></td>
                     <td><RangeButton buttonName="63" type="o" /></td>
                     <td><RangeButton buttonName="53" type="o" /></td>
                     <td><RangeButton buttonName="43" type="o" /></td>
                     <td><RangeButton buttonName="33" type="p" /></td>
                     <td><RangeButton buttonName="32" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="A2" type="o" /></td>
                     <td><RangeButton buttonName="K2" type="o" /></td>
                     <td><RangeButton buttonName="Q2" type="o" /></td>
                     <td><RangeButton buttonName="J2" type="o" /></td>
                     <td><RangeButton buttonName="T2" type="o" /></td>
                     <td><RangeButton buttonName="92" type="o" /></td>
                     <td><RangeButton buttonName="82" type="o" /></td>
                     <td><RangeButton buttonName="72" type="o" /></td>
                     <td><RangeButton buttonName="62" type="o" /></td>
                     <td><RangeButton buttonName="52" type="o" /></td>
                     <td><RangeButton buttonName="42" type="o" /></td>
                     <td><RangeButton buttonName="32" type="o" /></td>
                     <td><RangeButton buttonName="22" type="p" /></td>
                  </tr>
               </tbody>
            </table>

         </div>
      </div>

   );
}
 
export default RangeBoard;