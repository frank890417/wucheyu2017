<?php
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
  function clean($string) {
    $exp = explode(".",$string);
    $file_ext = end($exp);
    $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.

    return preg_replace('/[^A-Za-z0-9\-]/', '', $string).".".$file_ext; // Removes special chars.
  }
  // function grab_image($url,$saveto){
  //   $ch = curl_init ($url);
  //   curl_setopt($ch, CURLOPT_HEADER, 0);
  //   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  //   curl_setopt($ch, CURLOPT_BINARYTRANSFER,1);
  //   $raw=curl_exec($ch);
  //   curl_close ($ch);
  //   if(file_exists($saveto)){
  //       unlink($saveto);
  //   }
  //   $fp = fopen($saveto,'x');
  //   fwrite($fp, $raw);
  //   fclose($fp);
  // }
  // header( "Content-type: image/png" );

  if (key_exists("url",$_GET)){
    $url = $_GET["url"];
    $exp = explode(".",$url );
    $file_ext = end($exp);
    
    
    $img = 'cache/'.clean($url);
    if (key_exists("imgname",$_GET)){
      $img = 'cache/'. $_GET["imgname"].'.'.$file_ext;
    }
    
    // echo $img;

    if (!file_exists($img )){
      file_put_contents($img, file_get_contents($url)); 
      // grab_image($url, $img);
    }

    // $exp = explode(".",$url);
    // $file_ext = end($exp);
    // $fp = fopen($img, 'rb');
// 
    // send the right headers
    // header("Content-Type: image/".$file_ext);
    // header("Content-Length: " . filesize( $img ));
    header('Location: https://cheyuwu.com/static/img/'.$img);
    // return file_get_contents($url);
    // dump the picture and stop the script
    // fpassthru($fp);
    exit();
  }
?>